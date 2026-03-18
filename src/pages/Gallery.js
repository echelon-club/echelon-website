import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Gallery() {
  const db = getFirestore(app);
  const [images, setImages] = useState([]);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery"));
      const data = querySnapshot.docs.map(doc => {
        const item = doc.data();
        return {
          title: item.name,
          image: item.image,
          date: item.date
        };
      });
      setImages(data);
    };
    fetchGallery();
  }, []);

  return (
    <div className="page-gallery">
      <div className="navibar">
        <Navbar />
      </div>
      <div className="page-hero">
        <h1>Gallery</h1>
        <p>Moments from our events, sessions, and community — documented as they happened.</p>
      </div>
      <div className="gallery-section">
        <div className="gallery-grid">
          {images.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => setLightbox(item)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <div className="gallery-overlay-text">
                  <h4>{item.title}</h4>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox open" onClick={() => setLightbox(null)}>
          <span className="lightbox-close">Close ✕</span>
          <img src={lightbox.image} alt={lightbox.title} />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Gallery;