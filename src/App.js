 import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import './App.css';
import {BsQuestionCircleFill} from 'react-icons/bs'

function QuestionBox({ question, answers }) {
  // Initialize the coordinates of the button
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);




    const [ name, setName ] = useState('');

    function handleClick(name) {
      setName("Mee Tooo (✿◕‿◕✿)");
      
    }

 
  useEffect(() => {
   
    const button = document.getElementById("answer-button");
   
    button.addEventListener("mouseover", changePosition);
   
    function changePosition() {
     
      const newX = Math.floor(Math.random() * window.innerWidth - button.offsetWidth) +1;
      const newY = Math.floor(Math.random() * window.innerHeight - button.offsetHeight) +1;

      button.style.left = newX + "px";
      button.style.top = newY + 'px';
      
      
    }
    return () => {
      button.removeEventListener("mouseover", changePosition);
    };
  }, []);

  return (

    <div className="question-box">
     

<div className="wrapper">
  
          <i>
            <BsQuestionCircleFill/>
          </i>
         <h1 className="question"  > 
            DO YOU  💜 ME 
         </h1>
         <p className='display-4' >
         {name}
         </p>
         <div>
             <button className="yes-btn" onClick={handleClick}>
                 YES
             </button>

             
             <button className="no-btn" id="answer-button" 
             style={{ left:  "px", top: "px" }}
             >
                 NO
             </button>
         </div>
     </div>
    </div>

  );
}

export default QuestionBox;
