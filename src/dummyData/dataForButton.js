import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
export const dataForBtn = [
    {
        id: 1,
        heading:'Stock Total',
        price: '150000',
        percentage: '60',
        icon: <DashboardIcon/>
    },
    {
        id: 2,
        heading:'Total Profit',
        price: '25000',
        percentage: '70',
        icon: <AttachMoneyIcon/>
        
    },
    {
        id: 3,
        heading:'Unique Visitors',
        price: '1500000',
        percentage: '90',
        icon: <SupervisorAccountIcon/>
        
    },
];