import React from 'react';
import { Tab, Box } from '@material-ui/core';

import {tabsVal} from '../dummyData/leftpanelData'

const a11yProps = (index) => {
    return {
        id: index,
        "aria-controls": {index},
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
