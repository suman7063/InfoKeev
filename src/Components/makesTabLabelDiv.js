import React from 'react';
import { Tab, Box } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';

const tabsVal = [{ name: 'Dashboard', icon: <DashboardIcon />, content: 'Dashboard' },
{ name: 'UI Elements', icon: <DashboardIcon />, content: 'UI Elements' },
{ name: 'Components', icon: <DashboardIcon />, content: 'Components' },
{ name: 'Forms Stuff', icon: <DashboardIcon />, content: 'Forms Stuff' },
{ name: 'Data Table', icon: <DashboardIcon />, content: 'Data Table' },
{ name: 'Icons', icon: <DashboardIcon />, content: 'Icons' },
{ name: 'Sample Page', icon: <DashboardIcon />, content: 'Sample Page' },
{ name: 'Extra', icon: <DashboardIcon />, content: 'Extra' },
{ name: 'Forms Stuff', icon: <DashboardIcon />, content: 'Forms Stuff' },
{ name: 'Data Table', icon: <DashboardIcon />, content: 'Data Table' },
{ name: 'Icons', icon: <DashboardIcon />, content: 'Icons' },
{ name: 'Sample Page', icon: <DashboardIcon />, content: 'Sample Page' },
{ name: 'Extra', icon: <DashboardIcon />, content: 'Extra' },
];

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
};
const MakeLabel = (props) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" className="kiMakeLabaleDiv">
            <p>{props.value}</p>
            {props.icon}

        </Box>
    )
}
export const tabs = tabsVal.map((data, index) => {
    return (
        <Tab key={index} label={<MakeLabel value={data.name} icon={data.icon} />} {...a11yProps(index)} />)
});

export const tabPanel = tabsVal.map((data, index) => {
    return (
        <Tab key={index} label={<MakeLabel value={data.name} icon={data.icon} />} {...a11yProps(index)} />)
});