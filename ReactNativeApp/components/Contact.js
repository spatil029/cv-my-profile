import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am always open to discussing new opportunities, collaborations, or any questions you may have. Feel free to reach out to me through any of the following channels:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>sahadevpatil07@gmail.com</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <PhoneIcon sx={{ mr: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>(+91) 8884102826</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mr: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Bangalore, Karnataka, India</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <LinkedInIcon sx={{ mr: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              <a href="https://www.linkedin.com/in/sahadev-patil/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <GitHubIcon sx={{ mr: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              <a href="https://github.com/spatil029" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact; 