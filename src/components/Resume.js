import React from 'react';
import resumePDF from './SAURABH_CV.pdf';
import './Resume.css';
export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'SAURABH_CV.pdf';
    link.click();
  };

  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>
      <button className="resume-button" onClick={handleDownload}>
        Download Resume
      </button>
    </div>
  );
};


