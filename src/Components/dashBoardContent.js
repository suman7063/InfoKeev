import React, { useState, Fragment } from 'react'
import { Box, Tabs } from '@material-ui/core'
import { tabs } from './makeTabsForSPU'
import { TableForStock } from './tableForStock'
import {TableForPrice} from './tableForPrice'
import TabPanel from './tabPanel'
import DashboardIcon from '@material-ui/icons/Dashboard';
const DashboardContent = (props) => {
    const [value, setValue] = useState(0);

    const handleChangeBtn = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Box display="flex" alignItems="center" mt={5} mb={3} mx={2}>
                <DashboardIcon style={{ color: '#3BCCF6' }} />
                <p className="boxOneBtnPrice" style={{ marginLeft: '5px' }}>Dashboard</p>
            </Box>
            <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChangeBtn}
                textColor="primary"
            >
                {tabs}
            </Tabs>
            <TabPanel value={value} index={0} style={{ margin: '0px -16px' }}>
                <TableForStock />
            </TabPanel>
            <TabPanel value={value} index={1} style={{ margin: '0px -16px' }}>
                <TableForPrice />
            </TabPanel>
            
        </Fragment>
    );
}

export default DashboardContent      