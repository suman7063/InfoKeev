import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import InfoKeevMain from "../Components/infoKeevMainPage"
import { Provider } from 'react-redux'
import store from '../redux/store'
const Routes = () => {
  return (
    <Fragment>
      <Provider store={store}>
      <Switch>
        <Route exact path = "/" component = {InfoKeevMain}/>
      </Switch>
      </Provider>
    </Fragment>
  );
};

export default Routes;