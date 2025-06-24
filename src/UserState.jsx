import { useState } from "react";
export default function UserState(){
    //  useState 
 let Name="Mina";
 let [getName,setName]=useState(Name);
function buttonclicked(){
        if(getName==="Mina"){
            setName("Mems");
        }else{
            setName("Mina");
        }
       
    }
    return(
        <div>
            <button onClick={buttonclicked}>click me</button>
            <h1>{getName}</h1>
        </div>


    );
}