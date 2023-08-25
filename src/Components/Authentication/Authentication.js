import React from 'react';
import './Authentication.css'; // Create this stylesheet
import javalogo from '../../Assets/javalogo.png'

const Authentication = ({ children }) => {
  return (
    <div className="authentication">
      <div className="logo-container">
        {/* logo */}
        <img src={javalogo} alt="logo"/>
      </div>
      <div className="form-container">
        {children}
      </div>
    </div>
  );
};

export default Authentication;
