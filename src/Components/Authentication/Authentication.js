import React from 'react';
import './Authentication.css'; // Create this stylesheet
import javalogo from '../../Assets/javalogo.png'

const Authentication = ({ children }) => {
  return (
    <div className="auth-card">
      <div className="logo-container">
        {/* Your logo */}
        <img src="javalogo.png" alt="logo"/>
      </div>
      <div className="form-container">
        {children}
      </div>
    </div>
  );
};

export default Authentication;
