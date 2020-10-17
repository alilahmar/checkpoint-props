import React from "react";
import propTypes from "prop-types";

function Introduction({fullName, biog, profession, children,handleName,Fontcolor}) {
  return (
    <div className="presentation" onLoad={handleName}>

      <div className="itro">
        <h2 className="fullname" style={{color:Fontcolor}}>{fullName}</h2>
        {children}
        <p className="biog" >{biog}</p>
        <p className="profession" >{profession}</p>
      </div>
    </div>
  );
}
Introduction.propTypes={
  fullName:propTypes.string,
  biog:propTypes.string,
  profession:propTypes.string,
  children:propTypes.object,
}
Introduction.defaultProps={
  fullName:'my name is ....',
  biog:'my biography',
  profession:'my profession is ....',
  children:'show your photo',
}
export default Introduction

