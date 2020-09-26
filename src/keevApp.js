import React from "react";
import { Router, Route} from "react-router-dom";
import Routes from "./routings/routing";
import history from "./utils/history";
import './assests/style/main.scss'
const KeevApp = () => {
    return(
        <Router history={history}>
            <Route component={Routes} />
        </Router>
    )
}

export default KeevApp; 