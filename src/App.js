import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Admin from './Component/User/Admin/Admin/Admin';
// import AdminDashboard from './Component/User/Admin/AdminDashBoard/AdminDashBoard';

export default function App() {
    return (
        <Router>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/admin/dashboard" component={Admin} />
        </Router>
    );
}
