import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Main color
    },
    secondary: {
      main: '#ff4081', // Secondary color
    },
    background: {
      default: '#f4f6f8', // Background color
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});

export default theme; 