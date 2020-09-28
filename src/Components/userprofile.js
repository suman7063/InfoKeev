import React from 'react';
import { Box } from '@material-ui/core';
const UserProfile = (props) => {
    if (props.userTypeShow === "Forheader") {
        return (
            <Box display="flex" alignItems="center" className="kiUserProMain">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH4ZvnzlScdMw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=km3MsWpKcwVF6Bi4-Ged-ZvYE53_NgKLI1l6SqMWCIw" alt="not" width="40" height="40" className="ki-img-radius" />
                <Box>
                    Suman Singh
                </Box>
            </Box>
        )
    }
    else {
        return (
            <Box display="flex" alignItems="center" className="kiUserProMain" style={{ marginTop: '50px' }}>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH4ZvnzlScdMw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=km3MsWpKcwVF6Bi4-Ged-ZvYE53_NgKLI1l6SqMWCIw" alt="not" width="52" height="52" className="ki-img-radius" />
                <Box>
                    Suman Singh
                <br />
                    <p>Frotend Developer</p>
                </Box>
            </Box>
        )
    }
}

export default (UserProfile);
