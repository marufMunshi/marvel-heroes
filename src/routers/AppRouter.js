import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import HeroDetailsPage from '../components/HeroDetailsPage.js';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/hero/:id' component={HeroDetailsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;