import React from 'react';
import { Typography, Box, Container, LinearProgress, Grid, Paper, Divider } from '@mui/material';

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
    <Box component="section" className="skills" sx={{ height: '100%' }}>
      <Container maxWidth="lg" sx={{ p: 0, height: '100%' }}>
      <Box sx={{ 
          p: 0, 
          borderBottom: '1px solid #eee',
          backgroundColor: '#fff'
        }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 500,
              color: '#2c3e50',
              fontSize: '1.1rem'
            }}
          >
            Technical Skills
          </Typography>
        </Box>
        <Paper elevation={0} sx={{ 
          p: 0, 
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <Box sx={{ 
                flex: 1, // This will make each skill take equal height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: 2, // Increased padding
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.01)'
                }
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1 // Increased margin
                }}>
                  <Typography 
                    variant="body1" // Increased font size
                    sx={{ 
                      fontWeight: 500,
                      color: '#333',
                      fontSize: '1rem' // Explicit font size
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      minWidth: '40px',
                      textAlign: 'right',
                      fontSize: '0.9rem' // Increased font size
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level}
                  sx={{
                    height: 8, // Increased height
                    borderRadius: 4,
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: skill.color,
                      borderRadius: 4
                    }
                  }}
                />
              </Box>
              {index < skills.length - 1 && (
                <Divider sx={{ my: 0 }} />
              )}
            </React.Fragment>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}

export default Skills;