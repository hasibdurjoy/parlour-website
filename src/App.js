import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/login">
              <Navigation />
              <Login /></Route>
            <Route path="/register">
              <Navigation />
              <Register /></Route>
            <PrivateRoute exact path="/dashboard"><Dashboard /></PrivateRoute>
            <PrivateRoute path="/dashboard/:serviceId"><Dashboard /></PrivateRoute>
            <PrivateRoute path="/admin"><AdminDashboard /></PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
