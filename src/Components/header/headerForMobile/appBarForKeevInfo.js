
import React from "react";
import { Button, MenuItem, Box } from "@material-ui/core";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { Link } from "react-router-dom";
import { useStyles } from '../../useStyle'
import UserProfile from '../../../Components/userprofile'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SearchIcon from '@material-ui/icons/Search';
const AppBarForKeevInfo = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.rootAppBarColl}>
            <ButtonAppBarCollapse>
                <MenuItem>
                    <Link to="/#" className={classes.link}>
                        <UserProfile userTypeShow="Forheader" />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/#" className={classes.link}>
                        <AttachMoneyIcon />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/#" className={classes.link}>
                        <DashboardIcon />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/#" className={classes.link}>
                        <SupervisorAccountIcon />
                    </Link>
                </MenuItem>

            </ButtonAppBarCollapse>
            {/* That for desktop */}
            <div className={classes.buttonBarAppBarColl} id="appbar-collapse">

                <Box display="flex" alignItems="center" justifyContent="space-between" >
                    <Box display="flex" textAlign="center" className="searchMainDiv">
                        <SearchIcon />
                        <input type="text" placeholder="Search Project" />
                    </Box>
                    <Box>
                        <Button className={classes.writeText}>
                            <Link to="/#" className={classes.link}>
                                <UserProfile userTypeShow="Forheader" />
                            </Link>
                        </Button>

                        <Button className={classes.writeText}>
                            <Link to="/#" className={classes.link}>
                                <AttachMoneyIcon />
                            </Link>
                        </Button>
                        <Button className={classes.writeText}>
                            <Link to="/#" className={classes.link}>
                                <DashboardIcon />
                            </Link>
                        </Button>
                        <Button className={classes.writeText}>
                            <Link to="/#" className={classes.link}>
                                <SupervisorAccountIcon />
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
export default AppBarForKeevInfo;
