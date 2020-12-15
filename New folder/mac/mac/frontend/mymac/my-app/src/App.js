import React, { Component } from 'react';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Device from "./components/Device";
import User from "./components/User";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Titles from "./components/Titles";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      isLoaded: false
    };
  }
 componentDidMount() {
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res =>res.json())
 .then(json => {
   this.setState({
     isLoaded: true,
     items: json,
   })
 })
 }
 
  render() {
    var {isLoaded,items} = this.state;
    if (!isLoaded) {
      return <div>
        loading...
      </div>;
     
      
    }
    else {
    return (
     <div>data loaded</div>
// <BrowserRouter>

/* <div>

<Navigation/>
<Switch>
<Route path="/" component={Home}    />
<Route path="/Device" component={Device}/>
<Route path="/User" component={User}/>
<Route path="/Titles" component={Titles}/>


<Route component = {Error}/>
</Switch>
</div>

// </BrowserRouter> */
    );
  }
}
}
export default App;