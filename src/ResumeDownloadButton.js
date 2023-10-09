import React from 'react';
import Button from '@mui/material/Button';

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    // Replace 'https://example.com/path-to-your-resume.pdf' with the actual absolute URL of your PDF resume
    const resumeUrl = '/Marcell Gibbs.pdf'; // Update the URL accordingly
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button style={{margin: '20px'}}
      variant="contained"
      color="primary"
      onClick={handleDownload}
    >
      Download Resume
    </Button>
  );
};

export default ResumeDownloadButton;

