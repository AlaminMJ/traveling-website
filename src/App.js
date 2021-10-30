import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import MyOrders from "./components/MyOrders/MyOrders";
import AddService from "./components/AddService/AddService";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import OrderPlace from "./components/OrderPlace/OrderPlace";
import AuthContext from "./Context/AuthContext";
import Header from "./Shared/Header/Header";
import "./App.css";
import Footer from "./Shared/Footer/Footer";
function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
