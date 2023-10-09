import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const skillsData = [
  { skill: 'HTML', level: 'Intermediate' },
  { skill: 'CSS', level: 'Intermediate' },
  { skill: 'JavaScript', level: 'Intermediate' },
  { skill: 'Python', level: 'Intermediate' },
  { skill: 'Flask', level: 'Intermediate' },
  { skill: 'Django', level: 'Beginner' },
  { skill: 'PostgreSQL', level: 'Beginner' },
  { skill: 'MySQL', level: 'Beginner' },
  { skill: 'React', level: 'Beginner' },
];

const Skills = () => {
  return (
    <Container style={{ padding: '16px' }}>
      <Typography style={{ textAlign: 'center' }} variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skillsData.map((skillItem, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card style={{ backgroundColor: 'light grey' }}>
              <CardContent>
                <Typography variant="h6">{skillItem.skill}</Typography>
                <Typography variant="body2" color="textSecondary">{skillItem.level}</Typography>
                <LinearProgress variant="determinate" value={getProgressValue(skillItem.level)} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const getProgressValue = (level) => {
  switch (level) {
    case 'Beginner':
      return 25;
    case 'Intermediate':
      return 50;
    case 'Advanced':
      return 75;
    default:
      return 0;
  }
};

export default Skills;


