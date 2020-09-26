import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    //   backgroundColor: theme.palette.background.paper, 
    //   height: 'auto',
    // },
    tabs: {
     height: '450px'
    },
    addImgBtn:{
        width: '210px',
        height: '40px',
        background: 'transparent linear-gradient(180deg, #6FE3FF 0%, #2FC7F5 100%) 0% 0% no-repeat padding-box',
        borderRadius: '5px',
        opacity: 1,
        textTransform: 'none',
        color: '#fff',
        fontSize: '16px',
        marginTop: '20px',
    },
    mainBoxForHead: {
		justifyContent: "space-between",
		boxShadow: "none",
		backgroundColor: "#fff",
		zIndex: "1000",
		width: "100%",
		position: "fixed",
		top: "0px",
        height: "50px",
	},
	wrapContent:{
		margin: "0px 20px 0px 50px", 
		zIndex: "2",
		height: "50px"	
	},
	writeText: {
		fontSize: "16px",
		color: "#383838",
		lineHeight: "1.56",
		cursor: "pointer",
		padding: "0px 20px",
		textTransform: "none",
		height: "40px",
	},
	link: {
		color: "inherit",
		textDecoration: "inherit",
		display: "block"
    },
    rootAppBarColl: {
	   right: "20px",
	   display: 'flex',
	   alignItems: 'center',
    },
    buttonBarAppBarColl: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        margin: "10px",
        paddingLeft: "16px",
        right: 0,
        position: "relative",
        width: "100%",
        background: "transparent"
	},
	logo_still_size:{
        fontSize: '22px',
        fontWeight:'600',
        color: '#3BCCF6',
		fontFamily: 'Montserrat',
		width:  '200px',
	},
	'@media (max-width: 778px)': {
		mainBoxForHead: {
			height: '60px',
			boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.11)",
		},
		wrapContent:{
			height: "60px"	
		},
		logo_still_size:{
			height: '50px',
			width: '120px',	
			}
		},
}));


  