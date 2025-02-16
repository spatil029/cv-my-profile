import React from 'react';
import { Typography, Box, Container, List, ListItem, ListItemText, Divider } from '@mui/material';

function About() {
  return (
    <Box component="section" className="about">
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
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
              <ListItem>
                <ListItemText 
                  primary="Extensive Project Experience" 
                  secondary="Successfully delivered multiple enterprise-level applications in Healthcare and Finance domains using cutting-edge technologies"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Technical Leadership" 
                  secondary="Led development teams in architecting and implementing scalable solutions, mentoring junior developers, and establishing best practices"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Full Stack Expertise" 
                  secondary="Proficient in both front-end and back-end development with modern frameworks including .NET Core, React, Angular, and Node.js"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Agile Methodologies" 
                  secondary="Strong background in agile development practices, ensuring efficient project delivery and team collaboration"
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />
          
          <Box className="interests">
            <Typography variant="h5" component="h3" gutterBottom>
              Professional Interests
            </Typography>
            <Typography variant="body1">
              Passionate about modern web technologies, cloud architecture, and building scalable applications. 
              Keen interest in mentoring teams and contributing to technical decision-making processes.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;