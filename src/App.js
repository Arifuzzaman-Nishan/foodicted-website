import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Admin from './Component/User/Admin/Admin';

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/admin/dashboard" component={Admin} />
        </Router>
    );
}

export default App;
