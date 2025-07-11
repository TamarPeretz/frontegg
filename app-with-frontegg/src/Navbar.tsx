import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import TenantDropdown from './TenantDropdown';
import { AdminPortal, ContextHolder } from '@frontegg/react';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
    const logout = () => {
        const baseUrl = ContextHolder.getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
    };

    const openAdminPortal = () => {
        AdminPortal.show();
    };

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" color="transparent">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textAlign: 'left' } }}
                        >
                            Tamar's Application for Frontegg
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center' }}>
                            <TenantDropdown />
                            <IconButton color="inherit" onClick={openAdminPortal} aria-label="settings">
                                <SettingsIcon />
                            </IconButton>
                            <IconButton color="error" onClick={logout} aria-label="logout">
                                <LogoutIcon />
                            </IconButton>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navbar;
