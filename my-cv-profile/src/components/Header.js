import React from 'react';
import { Typography, Box, Avatar, Divider, IconButton, Tooltip } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DownloadIcon from '@mui/icons-material/Download';

function Header({ onMenuItemClick }) {
  const location = useLocation();
  
  const menuItems = [
    { text: 'About', path: '/', icon: <HomeIcon sx={{ fontSize: 20 }} /> },
    { text: 'Experience', path: '/experience', icon: <WorkIcon sx={{ fontSize: 20 }} /> },
    { text: 'Projects', path: '/projects', icon: <CodeIcon sx={{ fontSize: 20 }} /> },
    { text: 'Education', path: '/education', icon: <SchoolIcon sx={{ fontSize: 20 }} /> },
    { text: 'Skills', path: '/skills', icon: <BuildIcon sx={{ fontSize: 20 }} /> },
    { text: 'Contact', path: '/contact', icon: <ContactMailIcon sx={{ fontSize: 20 }} /> },
  ];

  const handleDownload = async () => {
    try {
      // Direct URL to your PDF on the server
      const pdfUrl = 'https://my-cv-profile-sahadevpatils-projects.vercel.app/Profile_Sahadev_Patil.pdf';
      
      // Fetch the PDF file
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Profile_Sahadev_Patil.pdf';
      
      // Append to body, click, and cleanup
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Fallback: Open PDF in new tab
      window.open('https://my-cv-profile-sahadevpatils-projects.vercel.app/Profile_Sahadev_Patil.pdf', '_blank');
    }
  };

  const handleMenuClick = () => {
    if (onMenuItemClick) {
      onMenuItemClick();
    }
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '1.5rem 1rem',
    }}>
      {/* Profile Section */}
      <Box sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mb: 3,
        flexShrink: 0
      }}>
        <Avatar 
          src="/favicon.ico"
          sx={{ 
            width: 50,
            height: 50,
            bgcolor: 'white',
            boxShadow: 1
          }}
        />
        
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#2c3e50'
            }}
          >
            Sahadev Patil
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'primary.main',
              fontWeight: 500,
              letterSpacing: '0.2px'
            }}
          >
            Full Stack Developer
          </Typography>
        </Box>

        <Box 
          onClick={handleDownload}
          sx={{ 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            borderRadius: '4px',
            color: 'primary.main',
            transition: 'all 0.2s ease',
            '&:hover': { 
              backgroundColor: 'rgba(25, 118, 210, 0.04)',
              transform: 'scale(1.05)'
            },
            '&:active': {
              transform: 'scale(0.95)'
            }
          }}
        >
          <DownloadIcon />
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Navigation Menu */}
      <Box sx={{ flex: 1 }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.text}
            to={item.path}
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
            style={{ textDecoration: 'none' }}
            onClick={handleMenuClick}
          >
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              py: 0.75,
              px: 1.5,
              borderRadius: '4px',
              color: '#64748b',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
                color: 'primary.main'
              },
              ...(location.pathname === item.path && {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                color: 'primary.main',
                fontWeight: 500
              })
            }}>
              {item.icon}
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.2px'
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </NavLink>
        ))}
      </Box>

      <Divider sx={{ mt: 2, mb: 2 }} />
      
      {/* Footer Section */}
      <Typography 
        variant="caption" 
        sx={{ 
          color: '#94a3b8',
          textAlign: 'center',
          fontSize: '0.75rem'
        }}
      >
        © 2025 Sahadev Patil
      </Typography>
    </Box>
  );
}

export default Header;