import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UpcomingEvents from './components/UpcomingEvents';
import LatestBlogs from './components/LatestBlogs';
import Verticals from './components/Verticals';
import Directories from './components/Directories';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Events from './pages/Events';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={
          <div>
            <section className='hero'>
              <div>
                <Navbar/>
              </div>
              <div className='hero-body'>
                <div>
                  <h1>Where ideas<br/><em>become</em><br/>momentum.</h1>
                  <p className='hero-desc'>A Multidisciplinary club that handles and organizes events across every sectors and departments, led by group of students and faculty associated</p>
                </div>
                <div className='hero-image'>
                  <img src={process.env.PUBLIC_URL + "/image.jpeg"} className='home-jpg'/>
                </div>
              </div>
              <div className='rule'></div>
              <div className="hero-footer">
                <span className="hero-footer-note">EST. 2026</span>
                <span className="hero-footer-note">Hackathons · Workshops · Media & Podcasts</span>
                <span className="hero-footer-note">Jain (Deemed-to-Be) University · Ramanagara</span>
              </div>
              <div className='rule'></div>
            </section>

            <section className='verticals'>
              <Verticals/>
            </section>

            <section className='upcomingEvents'>
              <UpcomingEvents/>
            </section>

            <section className='latestBlogs'>
              <LatestBlogs/>
            </section>

            <section className="team">
              <Directories/>
            </section>

            <section>
              <Footer/>
            </section>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
