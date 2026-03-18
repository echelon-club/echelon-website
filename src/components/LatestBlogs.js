import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";


function LatestBlogs() {

    const db = getFirestore(app);
    const [blog, setblog] = useState([]);

    useEffect(() => {
        const fetchblog = async () => {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const data = querySnapshot.docs.map(doc => doc.data());

            const sortedData = data.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });

            const limitedData = sortedData.slice(0, 3);

            setblog(limitedData);
        };

        fetchblog();
    }, []);

    return (
        <div>
            <div className='section-header' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 className='section-title'>Latest Blogs</h2>
                <Link className="view-all dark"to={'/blog'}>View all</Link>
            </div>

            <div className="blogs-grid">
                {blog.map((blog, index) => (
                    <div className="blog-card" key={index}>
                        <div className="blog-card-img">
                            <img src={blog.image} />
                        </div>

                        <div className="blog-type-tag">
                            <span>{blog.type}</span>
                        </div>

                        <h3 className="blog-title">
                            {blog.title}
                        </h3>

                        <div className="blog-desc">
                            <ReactMarkdown>{blog.description}</ReactMarkdown>
                        </div>

                        <div className="blog-meta">
                            <span>{blog.author || "Unknown"}</span>
                            <span>·</span>
                            <span>{blog.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestBlogs;