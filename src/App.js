import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <section className='hero'>
        <div>
        <Navbar/>
        </div>
        <div className='hero-body'>
        <div>
          <h1>Something<br/><em>remarkable</em><br/>is coming</h1>
          <p className='hero-desc'>A Multidisciplinary club that handles and organizes events across every sectors and departments, led by group of students and faculty associated</p>
        </div>
        <div className='hero-image'>
          <img src={process.env.PUBLIC_URL + "/image.jpeg"} className='home-jpg'/>
        </div>
        </div>
        <div className="hero-footer">
          <span className="hero-footer-note">Jain (Deemed-to-Be) University · Ramanagara</span>
        </div>
      </section>
      <section className='verticals'>
        <div className="section-header">
          <h2 className="section-title">Our Vertical</h2>
        </div>
        <div className='vertical'>
          <div className='vertical-grid'>
            <div className='vertical-card'>
              <h3 className='vertical-name'>
                Hackathons
              </h3>
              <p className='vertical-desc'>
                Our Hackathons vertical focuses on building and problem-solving through intense collaborative events. We organize and participate in hackathons where students work in teams to design innovative solutions, experiment with new technologies, and turn ideas into real prototypes within a limited time.
              </p>
            </div>
            <div className='vertical-card'>
              <h3 className='vertical-name'>
                Workshops
              </h3>
              <p className='vertical-desc'>
                The Workshops vertical is dedicated to learning and skill development. Through hands-on sessions led by experienced members and industry speakers, we explore new technologies, tools, and ideas while helping students build practical knowledge beyond the classroom.
              </p>
            </div>
            <div className='vertical-card'>
              <h3 className='vertical-name'>
                Media & Podcasts
              </h3>
              <p className='vertical-desc'>
                The Media & Podcast vertical focuses on storytelling, communication, and community engagement. Through podcasts, interviews, and digital content, we highlight ideas, experiences, and conversations that inspire learning, creativity, and collaboration within the student community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="section-header">
          <h2 className="section-title">Directories</h2>
        </div>

        <div className="team-grid">
          <div className="member-card">
            <div className="member-avatar"><span>D</span></div>
            <div className="member-name">Dhanush K</div>
            <div className="member-role">President</div>
          </div>
          <div className="member-card">
            <div className="member-avatar"><span>G</span></div>
            <div className="member-name">Gokul A S</div>
            <div className="member-role">Vice President</div>
          </div>
          <div className="member-card">
            <div className="member-avatar"><span>A</span></div>
            <div className="member-name">Akshay Kumar</div>
            <div className="member-role">General Secretary</div>
          </div>
          <div className="member-card">
            <div className="member-avatar"><span>V</span></div>
            <div className="member-name">Vrushab CS</div>
            <div className="member-role">Treasurer</div>
          </div>
          <div className="member-card">
            <div className="member-avatar"><span>T</span></div>
            <div className="member-name">Toms Raphy</div>
            <div className="member-role">Technical Director</div>
          </div>
          <div className="member-card">
            <div className="member-avatar"><span>M</span></div>
            <div className="member-name">Manush G</div>
            <div className="member-role">Creative Director</div>
          </div>
          <div className="member-card">
            <div className="member-avatar"><span>R</span></div>
            <div className="member-name">Ramachandran S</div>
            <div className="member-role">Tech Platform Manager</div>
          </div>
          <div className="member-card">
            <div className="member-avatar"><span>A</span></div>
            <div className="member-name">Abhinav R</div>
            <div className="member-role">AI Tech Lead</div>
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
