import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';

const certificationsData = [
  {
    title: 'Using Python to Interact with the Operating System - Google',
    issuer: 'Google',
    issuedDate: 'Apr 2022'
  },
  {
    title: 'Crash Course on Python - Google',
    issuer: 'Google',
    issuedDate: 'Apr 2022',
  },
  {
    title: 'Modern Javascript - Udemy',
    issuer: 'Udemy',
    issuedDate: 'Aug 2020',
  },
  {
    title: 'Responsive Web Design - freeCodeCamp',
    issuer: 'freeCodeCamp',
    issuedDate: 'Nov 2018',
  },
  {
    title: 'Intro to Web Development with HTML, CSS, and Javascript - IBM',
    issuer: 'IBM',
    issuedDate: 'Nov 2022',
  },
  {
    title: 'Frontend Developer - Udacity',
    issuer: 'Udacity',
    issuedDate: 'Jul 2020',
  },
  {
    title: 'Git and GitHub Essentials - Coursera',
    issuer: 'Coursera',
    issuedDate: 'Nov 2022',
  },
  {
    title: 'Full Stack Web Developer - Udacity',
    issuer: 'Udacity',
    issuedDate: 'Jan 2023',
  },
  {
    title: 'Full Stack Web developer - Udacity',
    issuer: 'Udacity',
    issuedDate: 'Jan 2023',
  },
  {
    title: 'Meta Back-End Developer Certificate - Coursera',
    issuer: 'Coursera',
    issuedDate: 'Aug 2023',
  },
];

certificationsData.sort((a, b) => {
    const dateA = new Date(a.issuedDate);
    const dateB = new Date(b.issuedDate);
    return dateB - dateA;
  });
  
  const Certifications = () => {
    return (
      <Container style={{ marginTop: '30px'}}>
        <Typography style={{ textAlign: 'center'}} variant="h4" gutterBottom>
          Licenses & Certifications
        </Typography>
        <Grid container spacing={2}>
          {certificationsData.map((certification, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">{certification.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{certification.issuer}</Typography>
                    <Typography variant="body2" color="textSecondary">{`Issued ${certification.issuedDate}`}</Typography>
                    {certification.credentialID && (
                      <Typography variant="body2" color="textSecondary">{`Credential ID ${certification.credentialID}`}</Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default Certifications;