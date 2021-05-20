import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout.js";
import Loginpage from "../src/components/loginpage/loginpage";
import Productdetailspage from "./components/Productdetailspage/Productdetailspage";
import Signuppage from "./components/signuppage/signuppage";
import Privateroute from "./components/privateroute/privateroute";
import Checkout2 from "./components/Checkout/Checkout2";
import Unauthorized from "./components/privateroute/unauthorized";
import "react-bootstrap/dist/react-bootstrap.min.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/signin">
            <Loginpage />
          </Route>

          <Route exact path="/signup">
            <Signuppage />
          </Route>
          {/* <Route exact path="/checkout">
            <Privateroute Component={Checkout2}>
              {/* <Route path="/checkout">
            <Header />
            <Checkout />
          </Route> 
            </Privateroute>
          </Route> */}
          <Route exact path="/checkout">
            <Header />
            <Checkout2 />
          </Route>
          <Route exact path="/unauthorized/1">
            <Unauthorized />
          </Route>
          <Route exact path="/products/:id">
            <Header />
            <Productdetailspage />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
