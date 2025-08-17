import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Client(){

    const[showitem,setitem]=useState({name:"",gmail:"",infor:""});
    return(
    <div className="client">
        <div className="head">
            <h1><span>contact</span> me</h1>
        </div>
        <p>please fill out the form below to discuss 
            any Workopportunities
        </p>

      
      <div className="contact">
        <input type="text" placeholder="Ener your full name" name="name" 
        value={showitem.name}  
        onChange={(e) =>{
        setitem({...showitem,name:e.target.value})
    }}
        
        />
        <input type="gmail" name="gmail" placeholder="Your Gmail"
        
            value={showitem.gmail}  
        onChange={(e) =>{
        setitem({...showitem,gmail:e.target.value})
    }}

        />
        <textarea name="info" placeholder="your information"
        
            value={showitem.infor}  
        onChange={(e) =>{
        setitem({...showitem,infor:e.target.value})
    }}
        
        ></textarea>

      </div>

        <div className="submit">
            <button className="btn"
            
            
            onClick={function(){
                const validgmail=/[A-Z]\w{3,}@gmail.com/
                const validname=/^[A-Za-z\s]{10,}$/;
                if(validname.test(showitem.name)&&validgmail.test(showitem.gmail))
                {
                    setitem({
        name: '',
        gmail: '',
        infor: ''
      });
                }

                
            }}
            

            >submit</button>
        </div>


        <div className="social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
                <span className="face"><FaFacebook/></span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="twiter"><FaTwitter/></span>
            </a>
            <a href="https://www.linkedin.com/in/mina-mahrous-8802b0268/" target="_blank" rel="noopener noreferrer">
            <span className="insta"> <FaLinkedin/></span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <span className="git"><FaGithub/></span>
            </a>
        </div>





    </div>
    )
}