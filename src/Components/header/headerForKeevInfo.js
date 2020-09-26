import React, { useEffect, useState,} from "react";
import { Box} from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBarForSubscription from './headerForMobile/appBarForKeevInfo'
import {useStyles} from '../useStyle'
import SearchIcon from '@material-ui/icons/Search';

const HeaderForKeevInfo = (props) => {
	const classes = useStyles();
		return (
			<Box className={classes.mainBoxForHead}>
				<Box display="flex" justifyContent="space-between" alignItems="center" className={classes.wrapContent}>
					<Box style={{ zIndex: "2" }}>
						<Link to="/" className={classes.link}>
							<p className={classes.logo_still_size}>blueBox</p>
						</Link>
					</Box>
					<Box display="flex" textAlign="center" className="searchMainDiv">
						<SearchIcon/>
						<input type="text" placeholder="Search Project"/>
					</Box>
					<AppBarForSubscription />
				</Box>
			</Box>
		);
};
export default HeaderForKeevInfo;
