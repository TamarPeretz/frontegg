import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';
import config from './config.ts';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const contextOptions = {
  baseUrl: config.baseUrl,
  clientId: config.clientId,
  appId: config.appId
};

const authOptions = {
  keepSessionAlive: true
};

const theme = createTheme({
  typography: {
    fontFamily: 'Outfit, Arial, sans-serif',
  },
});

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found");
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FronteggProvider
        contextOptions={contextOptions}
        hostedLoginBox={true}
        authOptions={authOptions}
      >
        <App/>
      </FronteggProvider>
    </ThemeProvider>
  </React.StrictMode>
); 