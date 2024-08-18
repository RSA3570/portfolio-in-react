// src/components/ResumeButton.js
import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    window.open('https://example.com/your-resume.pdf', '_blank'); // Replace with your resume link
  };

  return (
    <div className="resume-button-container">
      <svg width="70" height="70" className="resume-button" onClick={handleDownload}>
        <circle cx="35" cy="35" r="30" fill="#1D4ED8" />
        <path
          id="circlePath"
          d="M 35, 35 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
          fill="none"
        />
        <text fontSize="5" fontWeight="bold" fill="black">
          <textPath href="#circlePath" startOffset="60%">
            Download Resume
          </textPath>
        </text>
        <path
          d="M10 3v9.4l4.4-4.4 1.2 1.2-6 6-6-6 1.2-1.2 4.4 4.4V3h2z"
          fill="white"
          transform="translate(27 27) scale(1.2)"
        />
      </svg>
    </div>
  );
};

export default ResumeButton;
