
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route } from 'react-router';
import Explore from './Pages/Explore/Explore/Explore';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Home/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';

import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase/Purchase';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:pid">
              <Purchase />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
