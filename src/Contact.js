import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Contact = () => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Typography variant="h6">Contact</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Email: <a href="mailto:fourmarz@yahoo.com">fourmarz@yahoo.com</a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Phone: +570-807-5538
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            LinkedIn: <a href="https://www.linkedin.com/in/marcellgibbs/" target="_blank" rel="noopener noreferrer">Marcell Gibbs</a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;


