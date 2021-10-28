import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import AuthContext from "./Context/AuthContext";
import Header from "./Shared/Header/Header";
import './App.css'
function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
