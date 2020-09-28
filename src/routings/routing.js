import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import InfoKeevMain from "../Components/infoKeevMainPage"
const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={InfoKeevMain} />
      </Switch>
    </Fragment>
  );
};

export default Routes;