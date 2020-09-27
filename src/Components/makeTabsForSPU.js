import React from 'react';
import { Tab, Box } from '@material-ui/core';

import {dataForBtn} from '../dummyData/dataForButton'

const a11yProps = (index) => {
    return {
        id: index,
        "aria-controls": index,
    };
};
const MakeLabel = (props) => {
    var color = ""
    if(props.id === 0)
    {
        color = "transparent linear-gradient(91deg, #C694F9 0%, #AB64F4 100%) 0% 0% no-repeat padding-box"
    }
    if(props.id === 1)
    {
        color = "transparent linear-gradient(90deg, #6AA5E3 0%, #6866E9 100%) 0% 0% no-repeat padding-box"
    }
    if(props.id === 2)
    {
        color = "transparent linear-gradient(90deg, #FEB683 0%, #FF8993 100%) 0% 0% no-repeat padding-box"
    }
    return (
        <Box className="kiBoxCommon" style={{background: color}}>
            {props.icon}
            <p className="boxOneBtnHead">{props.heading}</p>
            <p className="boxOneBtnPrice">$150000</p>
            <p className="boxOneBtnHead setMarginTop">$150000</p>
        </Box>
    )
}
export const tabs = dataForBtn.map((data, index) => {
    let props = {
        id: index,
        heading: data.heading,
        icon: data.icon
    }
    return (
        <Tab key={index} label={<MakeLabel {...props}/>} {...a11yProps(index)} />)
});
