import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
      <img src='https://avatars.githubusercontent.com/u/57671822?s=280&v=4' alt='' className='h-[60px] w-[60px] mr-5'/>
         FHEVM IoT Security Analytics
      </div>
      <p className="header-subtitle">
        Secure IoT data analysis with Fully Homomorphic Encryption.
      </p>
      <div className="header-features">
        <span className="feature-item">
          <i className="fas fa-shield-alt mr-1 text-green-400"></i>
          End-to-End Encryption
        </span>
        <span className="feature-item">
          <i className="fas fa-microchip mr-1 text-blue-400"></i>
          Real-time Processing
        </span>
        <span className="feature-item">
          <i className="fas fa-chart-line mr-1 text-purple-400"></i>
          Anomaly Detection
        </span>
      </div>
    </div>
  );
};

export default Header;