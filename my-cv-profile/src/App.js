import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, IconButton, ThemeProvider, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import theme from './theme'; // Import the custom theme
import ChatBot from './components/ChatBot'; // Import the ChatBot component
import './styles/styles.css';

// SEO data for each route
const seoData = {
  '/': {
    title: 'Sahadev Patil - Full Stack Developer | Portfolio',
    description: 'Full Stack Developer with 9+ years of experience in .NET, React, Angular, and SQL Server. View my portfolio and projects.',
    keywords: 'Full Stack Developer, Portfolio, Sahadev Patil, .NET, React, Angular'
  },
  '/experience': {
    title: 'Professional Experience - Sahadev Patil',
    description: 'Over 9 years of experience in software development at IQVIA, Mindtree, and STP Investment Services.',
    keywords: 'Work Experience, IQVIA, Mindtree, STP Investment Services, Software Development'
  },
  '/projects': {
    title: 'Projects Portfolio - Sahadev Patil',
    description: 'Showcase of healthcare and finance domain projects using .NET, React, and Angular.',
    keywords: 'Projects, Portfolio, Healthcare IT, Finance Technology, Software Development'
  },
  '/skills': {
    title: 'Technical Skills - Sahadev Patil',
    description: 'Expertise in .NET, React, Angular, SQL Server, and cloud technologies.',
    keywords: 'Technical Skills, .NET, React, Angular, SQL Server, Cloud Computing'
  },
  '/education': {
    title: 'Education & Certifications - Sahadev Patil',
    description: 'Educational background and professional certifications in software development.',
    keywords: 'Education, Certifications, Computer Science, Software Development'
  },
  '/contact': {
    title: 'Contact - Sahadev Patil',
    description: 'Get in touch with Sahadev Patil for professional opportunities.',
    keywords: 'Contact, Professional Network, Software Developer'
  }
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the route changes
  }, [pathname]);

  return null; // This component does not render anything
}

function SEOWrapper() {
  const location = useLocation();
  const currentSEO = seoData[location.pathname] || seoData['/'];

  return (
    <Helmet>
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <link rel="canonical" href={`https://sahadevpatils-projects.vercel.app${location.pathname}`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sahadev Patil",
          "jobTitle": "Full Stack Developer",
          "url": "https://sahadevpatils-projects.vercel.app",
          "sameAs": [
            "https://www.linkedin.com/in/sahadev-patil/",
            "https://github.com/spatil029"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "India"
          }
        })}
      </script>
    </Helmet>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleBackground = () => {
    setIsDarkBackground(!isDarkBackground);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <SEOWrapper />
        <Box className={`app-container ${isDarkBackground ? 'dark-background' : 'light-background'}`}>
          {/* Background Toggle Button */}
          <Fab
            onClick={toggleBackground}
            size="small"
            sx={{
              position: 'fixed',
              top: '10px',
              right: '10px',
              zIndex: 1200,
              backgroundColor: isDarkBackground ? '#333' : '#fff',
              color: isDarkBackground ? '#fff' : '#333',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              '&:hover': {
                backgroundColor: isDarkBackground ? '#555' : '#f5f5f5',
              }
            }}
          >
            {isDarkBackground ? <Brightness7Icon /> : <Brightness4Icon />}
          </Fab>

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
              backgroundColor: isDarkBackground ? '#1a1a1a' : '#f0f0f0',
              position: 'fixed',
              height: '100vh',
              overflowY: 'hidden',
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
              backgroundColor: isDarkBackground ? '#0a0a0a' : '#fff',
              color: isDarkBackground ? '#fff' : '#000',
              overflowY: 'auto',
              '@media (max-width: 768px)': {
                marginTop: '60px'
              },
              // Add these styles for Firefox compatibility
              scrollbarWidth: 'thin',
              scrollbarColor: isDarkBackground ? '#666 transparent' : '#1976d2 transparent',
              '&::-webkit-scrollbar-track': {
                margin: '80px 0'
              }
            }}
          >
            <AppRoutes />
          </Box>

          {/* ChatBot Component */}
          <ChatBot />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;