
import React from "react";
import { Button, MenuItem,Box } from "@material-ui/core";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { Link } from "react-router-dom";
import {useStyles} from '../../useStyle'
import UserProfile from '../../../Components/userprofile'

const AppBarForKeevInfo = (props) => {

    const classes = useStyles();
    return(
    <div className={classes.rootAppBarColl}>
        <ButtonAppBarCollapse>
            <MenuItem>
                <Link to="/#" className={classes.link}>
                    Features
            	</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/#" className={classes.link}>
                    Pricing
            	</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/#" className={classes.link}>
                    Testimonials
            	</Link>
            </MenuItem>
        </ButtonAppBarCollapse>
        {/* That for desktop */}
        <div className={classes.buttonBarAppBarColl} id="appbar-collapse">
            
            <Box display="flex" alignItems="center">
            
                <Button className={classes.writeText}>
                    <Link to="/#" className={classes.link}>
                        <UserProfile userTypeShow="Forheader"/>
            		</Link>
                </Button>
                <Button className={classes.writeText}>
                    <Link to="/#" className={classes.link}>
                        Pricing
            		</Link>
                </Button>
                <Button className={classes.writeText}>
                    <Link to="/#" className={classes.link}>
                        Testimonials
            		</Link>
                </Button>
            </Box>
        </div>
    </div>
);
}
export default AppBarForKeevInfo;
