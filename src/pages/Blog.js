import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blog() {
  const db = getFirestore(app);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const data = querySnapshot.docs.map(doc => doc.data());

      const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setBlogs(sorted);
    };

    fetchBlogs();
  }, []);

  if (!blogs.length) return <div>Loading...</div>;

  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div className="page-blog">
        <div className="navibar">
            <Navbar/>
        </div>
      <div className="page-hero">
        <h1>Blog</h1>
        <p>Stories, event recaps, and thoughts from the people building the club.</p>
      </div>

      <div className="blog-section">

        <div className="blog-featured">
          <div className="blog-featured-img">
            <img src={featured.image} />
          </div>

          <div className="blog-featured-body">
            <span className="tag-badge">{featured.type}</span>
            <h2>{featured.title}</h2>

            <ReactMarkdown>
              {featured.description}
            </ReactMarkdown>

            <div className="blog-featured-meta">
              <div className="blog-author-avatar">
                {featured.author?.charAt(0)}
              </div>
              <span>{featured.author}</span>
              <span className="dot">·</span>
              <span>{featured.date}</span>
              <span className="dot">·</span>
              <span>{featured.readTime || "5 min read"}</span>
            </div>
          </div>
        </div>

        <div className="blog-grid">
          {rest.map((blog, index) => (
            <div className="blog-card" key={index}>

              <div className="blog-card-img">
                <img src={blog.image} />
              </div>

              <span className="tag-badge">{blog.type}</span>

              <h3>{blog.title}</h3>

              <ReactMarkdown>
                {blog.description}
              </ReactMarkdown>

              <div className="blog-card-meta">
                <div className="blog-author-avatar">
                  {blog.author?.charAt(0)}
                </div>
                <span>{blog.author}</span>
                <span className="dot">·</span>
                <span>{blog.date}</span>
                <span className="dot">·</span>
                <span>{blog.readTime || "4 min"}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Blog;