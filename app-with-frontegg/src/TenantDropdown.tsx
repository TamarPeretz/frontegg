import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAuth, useAuthActions, useTenantsActions } from '@frontegg/react';
import { useEffect } from 'react';


export default function MuiDropdown() {
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
        <FormControl >
            <InputLabel id="tenant-selction">Select Tenant</InputLabel>
            <Select
                labelId="tenant-selction"
                id="tenant-select"
                value={tenantsState.activeTenant?.tenantId}
                label="Select Tenant"
                onChange={handleSwitchTenant}
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
