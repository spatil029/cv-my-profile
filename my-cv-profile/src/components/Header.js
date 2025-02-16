import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
  return (
    <Box component="header" className="header" sx={{ 
      py: 1, // Reduced padding
      mb: 1, // Reduced margin
     // maxHeight: '25%'
    }}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ gap: 0.5 }}> {/* Reduced gap */}
          <AccountBoxIcon 
            sx={{ 
              fontSize: 80, // Reduced icon size
              color: '#1976d2',
              mb: 1 // Reduced margin bottom
            }} 
          />
          <Typography variant="h3" component="h1" sx={{ mb: 0.5 }}> {/* Reduced margin */}
            Sahadev Patil
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}> {/* Reduced margin */}
            .Net Full Stack Developer
          </Typography>
          <Typography variant="subtitle1">
            Passionate about creating elegant solutions to complex problems
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;