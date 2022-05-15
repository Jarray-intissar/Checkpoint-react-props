
import React from 'react'
import Profile from './profile/Profile';
import "./profile/Profile.css";
import img1 from './profile/vooo.jpg';



const App = () => {

    const personne = {

      fullName:"Intissar jarray",
      bio:"I m creative and motivated",
      profession:"Etudiante",
      img:"voo.jpg",
     
    };

    const handleName = (X) => {
      alert(X);
    };
  
    return (
      <div className="card">
        <Profile personne={personne} handleName={handleName}>
       <img style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={img1}
          alt="a"/>
          </Profile>
      </div>
      );
    }

export default App