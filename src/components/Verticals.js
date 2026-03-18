import { deleteField } from "firebase/firestore";

function Verticals(){
    return(
        <div>
            <div className="section-header">
                <h2 className="section-title">Three verticals <br></br> One community.</h2>
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
        </div>
    );
}

export default Verticals;