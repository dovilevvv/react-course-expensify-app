import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashbordPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

// Client side routers
const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ExpenseDashbordPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;