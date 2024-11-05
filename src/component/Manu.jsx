import React from 'react';
import { NavLink } from 'react-router-dom';


const Manu = () => {
    return (
        <div>
            
 <ul>


<li> <NavLink  className={({isActive})=>isActive?"active-item":"pending-item"} to="/" >Home</NavLink> </li>
<li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/loging/10/hridoy">Login</NavLink></li>
<li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="not">Not</NavLink></li>




 </ul>





        </div>
    );
};

export default Manu;