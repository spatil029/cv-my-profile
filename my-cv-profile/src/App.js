import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/styles.css';

function App() {
  const menuItems = [
    { text: 'About', path: '/' },
    { text: 'Experience', path: '/experience' },
    { text: 'Projects', path: '/projects' },
    { text: 'Education', path: '/education' },
    { text: 'Skills', path: '/skills' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <Router>
      <Box className="app-container">
        {/* Left Sidebar with Header */}
        <Box className="sidebar">
          <Header />
        </Box>

        {/* Main Content Area */}
        <Box className="main-content">
          {/* Navigation Menu */}
          {/*<Paper className="nav-container">
            <Box className="nav-menu">
              {menuItems.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {item.text}
                </NavLink>
              ))}
            </Box>
          </Paper>*/}

          {/* Content Area */}
          <Paper className="content-area">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Paper>
        </Box>
      </Box>
    </Router>
  );
}

export default App;