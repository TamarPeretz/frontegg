import { AdminPortal, useAuthActions } from "@frontegg/react";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import TenantDropdown from "./TenantDropdown";

const Navbar = () => {
  const { logout } = useAuthActions();

  const logoutUser = () => {
    logout(); 
  };

  const openAdminPortal = () => {
    AdminPortal.show();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" className="navbar-title">
            Tamar's Application for Frontegg
          </Typography>
          <Box sx={{ display: "flex", alignItems: "inherit", gap: "5px" }}>
            currently logged at: <TenantDropdown />
            <Tooltip title="Settings" arrow>
              <IconButton
                color="inherit"
                onClick={openAdminPortal}
                aria-label="settings"
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout" arrow>
              <IconButton color="error" onClick={logoutUser} aria-label="logout">
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
