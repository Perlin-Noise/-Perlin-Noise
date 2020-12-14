import React, { Component } from 'react';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Device from "./components/Device";
import User from "./components/User";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Titles from "./components/Titles";


class App extends Component {
  getData = async  () =>{
    const api_call = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62488ae8e88a7eee48ee9e4e24b0ab91be94&start=8.681495,49.41461&end=8.687872,49.420318`);
    const data = await api_call.json();
  }
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