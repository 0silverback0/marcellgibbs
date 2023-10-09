import React from 'react';
import Typography from '@mui/material/Typography';

const footerStyle = {
  backgroundColor: '#f5f5f5', // Light grey background color
  height: '100px', // Height of 100px
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '30px'
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <Typography variant="body1">
          © {new Date().getFullYear()} Marcell Gibbs
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;


