import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { signin } from "./auth/helper"
import PrivateRoutes from "./auth/helper/PrivateRoutes"

import Home from "./core/Home"
import Signup from "./user/helper/Signup"
import Signin from "./user/helper/Signin"
import UserDashboard from "./user/helper/UserDashboard"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
