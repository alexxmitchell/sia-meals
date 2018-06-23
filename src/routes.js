import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Payment from "./components/Customer/Payment/Payment";
import MealPlan from "./components/MealPlan/MealPlan";
import SignUp from "./components/SigninUp/SignUp";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/meals/pay" component={Payment} />
    <Route path="/meals" component={MealPlan} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);
//create route for about page ==> Header About(inside Main) Footer
