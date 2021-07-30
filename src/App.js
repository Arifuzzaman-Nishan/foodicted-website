import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoodDetails from './Component/FoodDetails/FoodDetails';
import Home from './Component/Home/Home';
// import AdminDashboard from './Component/User/Admin/AdminDashBoard/AdminDashBoard';
import store from './Component/redux/store';
import Admin from './Component/User/Admin/Admin/Admin';

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/home" component={Home} />
                <Route exact path="/" component={Home} />
                <Route path="/admin/dashboard" component={Admin} />
                <Route path="/food/:id" component={FoodDetails} />
            </Router>
        </Provider>
    );
}
