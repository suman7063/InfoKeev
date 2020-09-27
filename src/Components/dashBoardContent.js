import React, { useState, Fragment } from 'react'
import { Box,Tabs, Button, Tab} from '@material-ui/core'
import { tabs } from './makeTabsForSPU'
import TableForStock from './tableForStock'
import TabPanel from './tabPanel'

const DashboardContent = (props) => {
    const [value, setValue] = useState(0);

    const handleChangeBtn = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Fragment>
             <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChangeBtn}
                textColor="primary"
                >
                {tabs}
            </Tabs>
            <TabPanel value={value} index={0} style={{margin: '0px -16px'}}>
                <TableForStock />
            </TabPanel>
        </Fragment>
    );
}

export default DashboardContent