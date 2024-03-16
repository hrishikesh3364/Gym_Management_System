import React from 'react';
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";


import Gallery from './HomePages/Gallery';
import Blogs from './HomePages/Blogs';
import Programs from './HomePages/Programs';
import GetStarted from './HomePages/Home';
import Contact from './HomePages/Contact';
import Login from './HomePages/Login';
import CreateUserComponent from './HomePages/SignUp'

import Admin from './AdminComponent/Admin';
import Trainer from './TrainerComponent/Trainer';
import Member from './MemberComponent/Member';






const All = () => {
  const dark=false
  return (
    <Router>
  



      <Switch>
      <Route  path="/getstarted" component={GetStarted}/>
      <Route  path="/gallery" component={Gallery}/>
      <Route  path="/programs" component={Programs}/>
      <Route  path="/blogs" component={Blogs}/>
      <Route  path="/contact" component={Contact}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/createuser" component={CreateUserComponent}/>
      <Route  path="/admin" component={Admin}/>
      <Route  path="/trainer" component={Trainer}/>
      <Route  path="/member" component={Member}/>

    
      </Switch>


   

    </Router>
  )
}

export default All
