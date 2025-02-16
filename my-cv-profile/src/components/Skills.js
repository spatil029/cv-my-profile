import React from 'react';
import { Typography, Box, Container, LinearProgress, Grid, Paper } from '@mui/material';

function Skills() {
  const skills = [
    {
      name: 'C# & MVC',
      level: 90, // Represented as percentage
      color: '#2196f3' // MUI blue
    },
    {
      name: 'MS SQL',
      level: 85,
      color: '#f50057' // MUI pink
    },
    {
      name: 'jQuery/Angular',
      level: 80,
      color: '#ff9800' // MUI orange
    },
    {
      name: 'React.JS',
      level: 85,
      color: '#00bcd4' // MUI cyan
    },
    {
      name: 'Web API',
      level: 88,
      color: '#4caf50' // MUI green
    },
    {
      name: '.Net Core/NodeJS',
      level: 82,
      color: '#9c27b0' // MUI purple
    },
    {
      name: 'Unit Testing',
      level: 75,
      color: '#ff5722' // MUI deep orange
    }
  ];

  return (
    <Box component="section" className="skills">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          Technical Skills
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} key={index}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 2,
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'scale(1.01)',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      mb: 1
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      {skill.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: skill.color,
                        borderRadius: 5
                      }
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;