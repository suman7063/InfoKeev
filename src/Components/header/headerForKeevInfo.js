import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBarForSubscription from './headerForMobile/appBarForKeevInfo'
import { useStyles } from '../useStyle'

const HeaderForKeevInfo = (props) => {
	const classes = useStyles();
	return (
		<Box className={classes.mainBoxForHead}>
			<Box display="flex" alignItems="center" className={classes.wrapContent}>
				<Box style={{ width: '15%' }}>
					<Link to="/" className={classes.link}>
						<p className={classes.logo_still_size}>blueBox</p>
					</Link>
				</Box>

				<AppBarForSubscription />
			</Box>
		</Box>
	);
};
export default HeaderForKeevInfo;
