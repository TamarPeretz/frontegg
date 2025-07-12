import { useAuth, useAuthActions, useTenantsActions } from "@frontegg/react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";

export default function TenantDropdown() {
  const { switchTenant } = useAuthActions();
  const { loadTenants } = useTenantsActions();
  const { tenantsState } = useAuth();
  const tenants = tenantsState.tenants;

  useEffect(() => {
    loadTenants();
  }, [loadTenants]);

  return (
    <FormControl size="small" sx={{ minWidth: 120, m: 0 }}>
      <Select
        value={tenantsState.activeTenant?.tenantId}
        onChange={(event) => switchTenant({ tenantId: event.target.value })}
        displayEmpty
        className="tenant-dropdown"
      >
        {tenants.map((option) => (
          <MenuItem key={option.tenantId} value={option.tenantId}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
