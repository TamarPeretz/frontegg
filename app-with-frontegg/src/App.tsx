import './App.css';
import { useEffect } from 'react';
import { ContextHolder, useAuth, useLoginWithRedirect, AdminPortal } from "@frontegg/react";
import Navbar from './Navbar';
// import TenantDropdown from './TenantDropdown';
// import { Button, Grid } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  const openAdminPortal = () => {
    AdminPortal.show();
  };


  return (

    <div className="App">
      {isAuthenticated ? (
        <div>
          <Navbar />
          <div>
            <img src={user?.profilePictureUrl ?? undefined} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', marginTop: '15px' }}>
            {/* <div>
              <Button variant="outlined" onClick={openAdminPortal} startIcon={<SettingsIcon />}>Settings</Button>
            </div>
            <TenantDropdown />
            <div>
              <Button variant="contained"
                color="error"
                startIcon={<LogoutIcon />}
                onClick={() => logout()}>Logout</Button>
            </div> */}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;