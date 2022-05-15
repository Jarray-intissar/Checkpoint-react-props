import React from 'react'
import PropTypes from "prop-types";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="card">
      <div>{props.children}</div>
      <div className="container">
        <h3>
          <span className="label"> FullName : </span>{props.personne.fullName}
        </h3>

        <p>
          <span className="label"> Profession : </span> {props.personne.profession} 
        </p>

         <p> 
             <span className="label"> Bio : </span> {props.personne.bio}
        </p>
        
        <button
          onClick={() => props.handleName(props.personne.fullName)}
          className="btn"> click 
        </button>
        
      </div>
    </div>
   );
  };

  Profile.defaultProps ={};

  Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
  };


export default Profile

