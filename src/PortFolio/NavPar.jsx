import pg from './imgs/noback.png';
import pg2 from './imgs/MenuList.png'
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from 'react';
export default function NavPar(){

    const home=document.querySelector('.bais');
    const skills=document.querySelector('.head');
    const projec=document.querySelector('.mywork');

    const [showitem,setitem]=useState(false);
    return(
        <div className='bais'>
            <div className="nav">
            <div className="logo">mm
                <div className="color"></div>
            </div>
            <div className="links">
                <ul>
                <li><a href="#gg"
        onClick={function(){
            home.scrollIntoView({behavior:"smooth"})
        }}
                
            

                >home</a></li>



                <li><a href="#sk"
                
                    
            onClick={function(){

                  skills.scrollIntoView({ behavior:"smooth"})
  
            }}
                
                >skills</a></li>
                <li><a href="#dis"
                
                    
            onClick={function(){
                 

                  projec.scrollIntoView({ behavior: "smooth" })
  
            }}
                
                >projects</a></li>
                
                </ul>
                </div>
                    
                    <button className="btn"
                    
                        
            onClick={()=>{
                 const contect=document.querySelector('.contact');

                  contect.scrollIntoView({ behavior: "smooth"});
  
            }}

                    >contact me</button>
    




                    <div className="sidemenue">

                        <div className="menu"
                        
                        
                      onClick={()=>
                        setitem(!showitem)
                      }
                        
                        >

                                    <img src={pg2} alt=""/>

                        </div>




<div className={`sidm ${showitem ? "show" : ""}`}>
        <a href="#home"
        
          onClick={function(){
            home.scrollIntoView({behavior:"smooth"})
        }}
        >Home</a>

        <a href="#skills"
        
         onClick={function(){

                  skills.scrollIntoView({ behavior:"smooth"})
  
            }}
        
        
        >Skills</a>

        <a href="#about"
        
           onClick={()=>{
                 const projects=document.querySelector('.mywork');

                  projects.scrollIntoView({ behavior: "smooth" });
  
            }}
        
        
        >About</a>
        <a href="#contact"
        
        onClick={function(){

        
          
        const contect=document.querySelector('.contact');

                  contect.scrollIntoView({ behavior: "smooth"});
  
            }}
        
        
        >Contact me</a>
      </div>
                    
   






                        <div className="links">

                                     <ul>
                <li><a href="#"
        
                
            

                >home</a></li>
                <li><a href="#"
                
                    
            onClick={()=>{
                 const skills=document.querySelector('.mySkills');

                  skills.scrollIntoView({ behavior: "smooth" });
  
            }}
                
                >skills</a></li>
                <li><a href="#"
                
                    
            onClick={()=>{
                 const projects=document.querySelector('.mywork');

                  projects.scrollIntoView({ behavior: "smooth" });
  
            }}
                
                >projects</a></li>
                
                </ul>
                
                    
                    <button className="btn"
                    
                        
            onClick={()=>{
                 const contect=document.querySelector('.contact');

                  contect.scrollIntoView({ behavior: "smooth"});
  
            }}

                    >contact me</button>
    



                        </div>
                    </div>
                </div>

                <div className="continer">
                    <div className="discraption">
                       <h1> hello,<br/>i am <span>mina <br></br></span> 
                       website designer</h1>
                       <p> I specialize in front-end technologies such as HTML, CSS, JavaScript, and React JS</p>
 <button className='btn'
 onClick={() => window.open('https://www.linkedin.com/in/mina-mahrous-8802b0268/', '_blank')}
 >more me</button>
                       

                    </div>

                    <div className="dicimg">
                        <img src={pg} alt="" />
                    </div>

                </div>



        </div>


    );
}