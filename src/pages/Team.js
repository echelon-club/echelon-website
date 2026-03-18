import Directories from "../components/Directories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Team(){
   return(
    <div>
        <div className="navibar" >
            <Navbar/>
        </div>
        <div>
            <div className="page-hero dark">
        <h1>Our Team</h1>
        <p>Eight students. One vision. Built from the ground up at Jain University.</p>
        </div>
        <section className="team">
            <Directories/>
        </section>
        </div>
        <Footer/>
    </div>
   ); 
}

export default Team