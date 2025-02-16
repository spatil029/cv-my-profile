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
                <ListItemText primary="9+ years of professional development experience" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Led multiple successful project deployments" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Strong background in agile methodologies" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Experienced in Finance and Healthcare domain" />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />
          
          <Box className="interests">
            <Typography variant="h5" component="h3" gutterBottom>
              Interests
            </Typography>
            <Typography variant="body1">
              Outside of coding, I enjoy contributing to open-source projects,
              writing technical blogs, and mentoring junior developers.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;