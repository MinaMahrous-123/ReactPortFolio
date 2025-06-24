import pr1 from "./imgs/pr1.png";
import pr2 from "./imgs/pr2.png";
import pr3 from "./imgs/pr3.png";
import pr4 from "./imgs/pr4.jpg";
import pr5 from "./imgs/pr5.png";
import pr6 from "./imgs/pr6.png";

export default function Work(){
    return(
        <div className="mywork">
            <div className="head">
                <h1>my <span>port</span>folio</h1>
            </div>

            <div className="projects">

                <div className="one">
                    <img src={pr1} alt="" />
                    <img src={pr2} alt="" />
                    <img src={pr3} alt="" />
                </div>

                <div className="on">
                    <img src={pr4} alt="" />
                    <img src={pr5} alt="" />
                    <img src={pr6} alt="" />
                </div>
                <div className="link">
                    <button className="btn"

                    onClick={() => 
                    window.open('https://github.com/MinaMahrous-123', '_blank')
                }

                    >see more</button>
                </div>


            </div>
        </div>
    )
}