import React, { useState, Fragment } from 'react'
import { Tabs, Button, Box } from '@material-ui/core'
import HeaderForKeevinfo from './header/headerForKeevInfo'
import UserProfile from './userprofile'
import { useStyles } from './useStyle'
import { tabs } from '../Components/makesTabLabelDiv'
import TabPanel from './tabPanel'
import DashboardContent from "./dashBoardContent"

const InfoKeevMain = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [openNav, setOpenNav] = useState(true)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const openLeftNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <Fragment>

            <HeaderForKeevinfo />

            <Box className="kiCommonCss">
                <Box textAlign="center" style={{ minWidth: '264px' }}>
                    <Box style={{ width: '100%' }}>
                        <UserProfile />
                        <Box className="kiCollapseDiv">
                            {openNav ?
                                <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    className={classes.tabs}
                                >
                                    {tabs}
                                </Tabs>
                                :
                                null
                            }
                        </Box>
                        <Button className={classes.addImgBtn} onClick={openLeftNav}>
                            Add Project
                        </Button>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: '#F5F5F5', height: '800px', width: '100%' }}>
                    <TabPanel value={value} index={0}>
                        <DashboardContent />
                    </TabPanel>
                </Box>
            </Box>
        </Fragment>
    );
}

export default InfoKeevMain