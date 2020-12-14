import React, { Component } from 'react';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Device from "./components/Device";
import User from "./components/User";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Titles from "./components/Titles";
class App extends Component {
  render() {
    return (
<BrowserRouter>

<div>

<Navigation/>
<Switch>
<Route path="/" component={Home} exact/>
<Route path="/Device" component={Device}/>
<Route path="/User" component={User}/>
<Route path="/Titles" component={Titles}/>


<Route component = {Error}/>
</Switch>
</div>

</BrowserRouter>
    );
  }
}

export default App;