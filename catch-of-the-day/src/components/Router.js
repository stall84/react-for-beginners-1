import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './storePicker';
import App from './App';
import FourOhFour from './NotFound';


// Setting up routing for webpage using react router
const Router = () => {

    return (
    
    <BrowserRouter>

        <Switch>

            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={FourOhFour} />

        </Switch>

    </BrowserRouter>

    )
}

export default Router;