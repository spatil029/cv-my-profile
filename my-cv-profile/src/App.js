import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Container, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
//import Projects from './components/Projects'; 
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/styles.css';

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'About', path: '/' },
    { text: 'Experience', path: '/experience' },
    { text: 'Education', path: '/education' },
    { text: 'Skills', path: '/skills' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          key={item.text} 
          component={NavLink} 
          to={item.path}
          onClick={() => isMobile && handleDrawerToggle()}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Router>
      <div className="app" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <AppBar 
          position="static" 
          color="default" 
          elevation={1}
          sx={{ minHeight: 'auto' }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'center' }}>
              {isMobile ? (
                <>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ position: 'absolute', left: 16 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true,
                    }}
                  >
                    {drawer}
                  </Drawer>
                </>
              ) : (
                <Box 
                  className="navigation"
                  sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    gap: 2,
                    '& .nav-link': {
                      textDecoration: 'none',
                      color: 'text.primary',
                      padding: '8px 16px',
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                      '&.active': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      },
                    }
                  }}
                >
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.text}
                      to={item.path}
                      className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        <Container 
          maxWidth="lg" 
          sx={{ 
            flexGrow: 1,
            overflow: 'auto',
            py: 2,
          }}
        >
          <main className="main-content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Container>
      </div>
    </Router>
  );
}

export default App;