import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './storePicker';


// Setting up routing for webpage using react router
const Router = () => {

    return <BrowserRouter>

        <Switch>

            <Route exact path="/" component={StorePicker} />

        </Switch>

    </BrowserRouter>
}

export default Router;