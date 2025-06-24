import on1 from './imgs/on1.png';
import two from './imgs/two.png';
import three from './imgs/three.png';
export default function Skills(){
    return(
        <div className="mySkills">
            <div className="head">
                <h1>what i <span>do</span></h1>
                </div>
                <p className='headp'>I am Mina Mahrous Embarek, a passionate Computer Science and Information Technology student with a strong foundation in software development. I actively participate in competitive programming, including ICPC, which has honed my problem-solving and algorithmic skills.

As a software developer, I specialize in front-end technologies such as HTML, CSS, JavaScript, and React JS. I have experience building responsive and user-friendly web applications, demonstrating my commitment to creating impactful digital solutions.

I am always eager to learn new technologies and expand my expertise in software engineering. Let is connect and explore opportunities to innovate together!
</p>
            

            <div className="discrption">
                <div className="dis">
                   <div className="img1">
                    <img src={on1} alt="" />
                    </div> 
                    <div className="disimg1">
                        <h3>ui/ux design</h3>
                        <p>I specialize in creating intuitive and user-friendly UI/UX designs that enhance user experience.
                             My designs focus on simplicity, functionality, and aesthetics to ensure seamless interactions.
                             I use user research and prototyping to develop engaging and accessible interfaces.
                             My goal is to deliver designs that improve usability and user satisfaction.
                        </p>
                    </div>
                 
                    
                </div>

                <div className="dis">
                   <div className="img2">
                    <img src={two} alt="" />
                    </div> 
                    <div className="disimg2">
                        <h3>website design</h3>
                        <p>I design modern, responsive websites that combine aesthetics with functionality.
                             My approach ensures a smooth user experience across all devices, from desktops to mobile phones.
                              I focus on clean layouts, interactive elements, and optimized performance.
                             My websites are designed to captivate users and drive engagement.
                        </p>
                    </div>
                 
                    
                </div>



                <div className="dis">
                   <div className="img3">
                    <img src={three} alt="" />
                    </div> 
                    <div className="disimg3">
                        <h3>app design</h3>
                        <p>I craft visually appealing and highly functional app designs that provide an effortless user experience.
                             My designs focus on smooth navigation, engaging UI elements, and user-centric interactions.
                              I create prototypes and wireframes to ensure a flawless design flow.
                             My goal is to develop apps that are both innovative and user-friendly.
                        </p>
                    </div>
                   
                    
                </div>


            </div>

        </div>

    );
}