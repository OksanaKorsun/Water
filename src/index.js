import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
const theme = {
  colors: {
    white: '#fafafa',
    black: '#212121',
    grey: '#999',
    accent: 'purple',
  },
  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/Water">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
