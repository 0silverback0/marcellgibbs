import React from 'react';
import Button from '@mui/material/Button';

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const resumeUrl = '/Marcell Gibbs.pdf'; 
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

