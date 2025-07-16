import React from 'react';
import './App.css';
import { HomePage } from './features/Home';
import { ThemeProvider } from '@mui/material';
import { portfolioTheme } from './configs';

function App() {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
