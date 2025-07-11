import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';
import config from './config.ts';

const contextOptions = {
  baseUrl: config.baseUrl,
  clientId: config.clientId,
  appId: config.appId
};

const authOptions = {
  keepSessionAlive: true
};

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found");
}
const root = ReactDOM.createRoot(container);
root.render(

  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App/>
  </FronteggProvider>
); 