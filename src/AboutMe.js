import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ResumeDownloadButton from './ResumeDownloadButton';

const AboutMe = () => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        Hello, I'm Marcell Gibbs, a passionate web developer with a relentless drive for learning and problem-solving through code. My journey in the tech world has been marked by hands-on freelance experience and active participation in open source projects.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Backend Specialist with Frontend Proficiency</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        My expertise lies in backend development, with a particular focus on crafting robust APIs that power modern web applications. However, I don't stop there; I also possess a solid foundation in frontend development, ensuring a holistic approach to building exceptional user experiences.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Certified Professional</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        I hold several certifications that attest to my commitment to excellence. These include the prestigious "Meta Certified Backend Developer" and the "Udacity Fullstack Developer" certification, among others. These certifications underscore my dedication to staying at the forefront of industry best practices.
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <ResumeDownloadButton />
      </div>
      <Typography variant="body1" paragraph>
        <strong>Passion for Problem Solving</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        I'm deeply passionate about the art of coding and the power it holds to address real-world challenges. Whether it's automating tasks, creating user-friendly software, or tackling complex problems, I revel in the process of crafting elegant solutions.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>My Skill Set</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        My technical toolbox is well-stocked with a range of skills, including proficiency in HTML, CSS, JavaScript, Python, Flask, Django, and database management systems like PostgreSQL and MySQL. These skills enable me to bring ideas to life efficiently and effectively.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Part-Time Work-from-Home Opportunity</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Currently, I am seeking a part-time, work-from-home role that allows me to channel my enthusiasm and skills into a professional environment. My experience as a freelancer has honed my ability to deliver results independently while staying connected with a remote team.
      </Typography>
      <Typography variant="body1" paragraph>
        I'm excited to embark on this next phase of my journey, where I aim to contribute my expertise, creativity, and dedication to your organization's success.
      </Typography>
      <Typography variant="body1" paragraph>
        Let's collaborate and make impactful strides in the world of technology.
      </Typography>
    </Container>
  );
};

export default AboutMe;
