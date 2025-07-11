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
        <FormControl>
            <Select
                id="tenant-select"
                value={tenantsState.activeTenant?.tenantId}
                onChange={handleSwitchTenant}
                displayEmpty
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
