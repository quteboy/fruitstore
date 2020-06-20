import React from "react";
import { render } from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";

//---> App
import HomeView from "appRoot/views/home";
import ErrorView from "appRoot/views/error";
import PageOneView from "appRoot/views/page1";





render(
    <HashRouter hashType="hashbang">
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/page1" component={PageOneView} />
            <Route type="404" component={ErrorView} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);