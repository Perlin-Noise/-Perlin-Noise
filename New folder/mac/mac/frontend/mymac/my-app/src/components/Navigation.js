import React from 'react';
import {NavLink} from "react-router-dom";
const Navigation = () =>{
    return(
        <div>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/User'>User</NavLink>
       <NavLink to='/Device'>Device</NavLink>
       <NavLink to='/Titles'>Titles</NavLink>
        </div>);
};
export default Navigation;