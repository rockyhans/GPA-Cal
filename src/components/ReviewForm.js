import React from 'react';
import '../App.css'; // Import the CSS file

const ReviewForm = () => {
  return (
    <div className="error-page-container">
      <div className="error-content">
        <h1 className="error-title">503</h1>
        <h2 className="error-message">This page is temporarily unavailable</h2>
        <p className="error-description">
          We're working on it and will be back shortly. Please try again later.
        </p>
        <a href="/" className="home-link">Go Back to Homepage</a>
      </div>
    </div>
  );
};

export default ReviewForm;
