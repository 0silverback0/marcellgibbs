import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const projectsData = [
  {
    title: 'West End Barbershop II',
    description: 'A website for a modern barbershop. Includes booking, services, and gallery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: 'https://www.westendbarbershop2.com',
    image: '/barbershop.png',
  },
  {
    title: 'Exercise Database',
    description: 'A simple exercise api',
    technologies: ['Django', 'Python', 'SQLite'],
    link: 'https://github.com/0silverback0/ExerciseDb',
    image: '/Fearless.svg'
  },
  {
    title: 'Landing Pages',
    description: 'My journey in maintaining an open-source project that celebrates collaboration and welcomes contributors from around the world.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Git', 'React'],
    link: 'https://radiant-cucurucho-b049fa.netlify.app/',
    image: '/landingPage.png'
  },
  {
    title: 'Apex Mind Apex Body',
    description: 'A Fitness blog for for tips and trick on how to improve your mind and body through exercise and nutrition.',
    technologies: ['React', 'Django', "SQLite", "Python", "Javascript"],
    link: 'https://apexmindapexbody.com/',
    image: '/apex.png'
  },
  // Add more projects here in the same format
];

const Projects = () => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Typography style={{textAlign: 'center'}} variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <img src={project.image} width={'100%'} height={'300px'} alt={project.title} />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">{project.description}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Technologies: {project.technologies.join(', ')}
                </Typography>
                <div style={{ textAlign: 'center', marginTop: '20px'} }>
                  <Button variant="outlined" color="primary" href={project.link} target="_blank">
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
