import React from 'react';
import { Typography, Box, Container, List, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AgileIcon from '@mui/icons-material/Speed';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import ChatBot from './ChatBot';

function About() {
  const highlights = [
    {
      primary: "Extensive Project Experience",
      secondary: "Successfully delivered multiple enterprise-level applications in Healthcare and Finance domains using cutting-edge technologies",
      icon: <BusinessCenterIcon sx={{ color: '#1976d2' }} />
    },
    {
      primary: "Technical Leadership",
      secondary: "Led development teams in architecting and implementing scalable solutions, mentoring junior developers, and establishing best practices",
      icon: <GroupsIcon sx={{ color: '#1976d2' }} />
    },
    {
      primary: "Full Stack Expertise",
      secondary: "Proficient in both front-end and back-end development with modern frameworks including .NET Core, React, Angular, and Node.js",
      icon: <DeveloperModeIcon sx={{ color: '#1976d2' }} />
    },
    {
      primary: "Agile Methodologies",
      secondary: "Strong background in agile development practices, ensuring efficient project delivery and team collaboration",
      icon: <AgileIcon sx={{ color: '#1976d2' }} />
    }
  ];

  const interests = [
    {
      text: "Modern web technologies and cloud architecture",
      icon: <CloudIcon sx={{ color: '#1976d2' }} />
    },
    {
      text: "Building scalable applications and technical decision-making",
      icon: <CodeIcon sx={{ color: '#1976d2' }} />
    }
  ];

  return (
    <Box component="section" className="about">
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom  sx={{fontWeight: 'bold'}}>
          About Me
        </Typography>
        <Box className="about-content">
          <Typography variant="body1" paragraph>
            Passionate, driven .NET full stack developer with 9+ years of experience. I always enjoy the phases of engineering and development of a web app. The spirit of growth always inspires me to satiate my passion for learning and sharing knowledge.
          </Typography>
          
          <Box className="highlights" mt={4}>
            <Typography variant="h5" component="h3" gutterBottom>
              Professional Highlights
            </Typography>
            <List>
              {highlights.map((item, index) => (
                <ListItem key={index} sx={{ py: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#2c3e50' }}>
                        {item.primary}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        {item.secondary}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />
          
          <Box className="interests">
            <Typography variant="h5" component="h3" gutterBottom  >
              Professional Interests
            </Typography>
            <List>
              {interests.map((item, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;