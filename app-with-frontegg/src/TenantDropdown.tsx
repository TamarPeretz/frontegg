import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAuth, useAuthActions, useTenantsActions } from '@frontegg/react';
import { useEffect } from 'react';


export default function TenantDropdown() {
    const { switchTenant } = useAuthActions();
    const { loadTenants } = useTenantsActions();
    const { tenantsState } = useAuth();
    const tenants = tenantsState.tenants;


    useEffect(() => {
        loadTenants();
      }, [loadTenants]);
      

    const handleSwitchTenant = (e: any) => {
        switchTenant({ tenantId: e.target.value });
    };

    return (
        <FormControl size="small" sx={{ minWidth: 120, m: 0 }}>
            <Select
                id="tenant-select"
                value={tenantsState.activeTenant?.tenantId}
                onChange={handleSwitchTenant}
                displayEmpty
                sx={{ height: 36, fontSize: '0.95rem', padding: 0 }}
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
