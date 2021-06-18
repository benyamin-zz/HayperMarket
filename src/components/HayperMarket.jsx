import React from "react";
import MainLayout from "./Layouts/MainLayout";
import {Route, Switch } from "react-router";
import HayperMarketIndex from './HayperMarke/HayperMarketIndex';

function hayperMarket() {
  return (
    <>
    <Switch>
      <MainLayout>
        <Route path="/" exact component={HayperMarketIndex} />
      </MainLayout>
    </Switch>
     
    </>
  );
}

export default hayperMarket;
