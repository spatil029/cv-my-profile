import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import './styles/styles.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
      <Router>
        <Box className="app-container">
          {/* Mobile Menu Button */}
          <IconButton
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            size="large"
            sx={{
              position: 'fixed',
              top: '10px',
              left: '10px',
              zIndex: 1200,
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&:hover': { backgroundColor: 'white' },
              '@media (min-width: 769px)': {
                display: 'none'
              }
            }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
  
          {/* Menu Overlay */}
          <Box
            className={`menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={closeMobileMenu}
            sx={{
              display: isMobileMenuOpen ? 'block' : 'none',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1100
            }}
          />
  
          {/* Sidebar */}
          <Box
            component="aside"
            className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}
            sx={{
              width: '280px',
              backgroundColor: '#fff',
              position: 'fixed',
              height: '100vh',
              overflowY: 'hidden', // Changed from 'auto' to 'hidden'
              zIndex: 1150,
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              '@media (max-width: 768px)': {
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                width: '100%'
              }
            }}
          >
            <Header onMenuItemClick={closeMobileMenu} />
          </Box>
  
          {/* Main Content */}
          <Box
            component="main"
            className="main-content"
            sx={{
              flex: 1,
              marginLeft: { xs: 0, md: '280px' },
              transition: 'margin-left 0.3s ease',
              minHeight: '100vh',
              backgroundColor: '#fff',
              overflowY: 'auto',
              '@media (max-width: 768px)': {
                marginTop: '60px'
              }
            }}
          >
            <AppRoutes />
          </Box>
        </Box>
      </Router>
    );
}

export default App;