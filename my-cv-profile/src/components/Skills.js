import React from 'react';
import { Typography, Box, Container, LinearProgress, Paper, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import ApiIcon from '@mui/icons-material/Api';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BugReportIcon from '@mui/icons-material/BugReport';

function Skills() {
  const skills = [
    {
      name: 'C# & MVC',
      level: 90,
      color: '#2196f3',
      icon: <CodeIcon sx={{ color: '#2196f3', fontSize: '1.2rem' }} />
    },
    {
      name: 'MS SQL',
      level: 85,
      color: '#f50057',
      icon: <StorageIcon sx={{ color: '#f50057', fontSize: '1.2rem' }} />
    },
    {
      name: 'jQuery/Angular',
      level: 80,
      color: '#ff9800',
      icon: <WebIcon sx={{ color: '#ff9800', fontSize: '1.2rem' }} />
    },
    {
      name: 'React.JS',
      level: 85,
      color: '#00bcd4',
      icon: <DeveloperModeIcon sx={{ color: '#00bcd4', fontSize: '1.2rem' }} />
    },
    {
      name: 'Web API',
      level: 88,
      color: '#4caf50',
      icon: <ApiIcon sx={{ color: '#4caf50', fontSize: '1.2rem' }} />
    },
    {
      name: '.Net Core/NodeJS',
      level: 82,
      color: '#9c27b0',
      icon: <IntegrationInstructionsIcon sx={{ color: '#9c27b0', fontSize: '1.2rem' }} />
    },
    {
      name: 'Unit Testing',
      level: 75,
      color: '#ff5722',
      icon: <BugReportIcon sx={{ color: '#ff5722', fontSize: '1.2rem' }} />
    }
  ];

  return (
    <Box component="section" className="skills" sx={{ height: '100%' }}>
      <Container maxWidth="lg" sx={{ p: 0, height: '100%' }}>
        <Box sx={{ 
          py: 1.5,
          px: 2,
          borderBottom: '1px solid #eee',
          backgroundColor: '#fff'
        }}>
          <Typography 
            variant="h6" 
            component="h1" 
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
          height: 'calc(100% - 52px)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <Box sx={{ 
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                px: 2,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.01)'
                }
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {skill.icon}
                    <Typography 
                      variant="body1"
                      sx={{ 
                        fontWeight: 500,
                        color: '#333',
                        fontSize: '1rem'
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: skill.color,
                      minWidth: '40px',
                      textAlign: 'right',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level}
                  sx={{
                    height: 8,
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