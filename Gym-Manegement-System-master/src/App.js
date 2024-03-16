import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './NavbarComponent/HomeNavbar';
import Gallery from './HomePages/Gallery';
import Blogs from './HomePages/Blogs';
import Programs from './HomePages/Programs';
import GetStarted from './HomePages/Home';
import Contact from './HomePages/Contact';
import Login from './HomePages/Login';
import CreateUserComponent from './HomePages/SignUp';

import Admin from './AdminComponent/Admin';
import Trainer from './TrainerComponent/Trainer';
import Member from './MemberComponent/Member';

const App = () => {
  const dark = false;

  const backgroundStyle = {
    backgroundColor: '#211545',
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")',
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    color: 'white',
  };

  return (
    <Router>
      <div
        className={dark ? 'dark' : 'light'}
        style={{
          ...backgroundStyle,
        }}
      >
        <div className='Abc'>
          <Navbar />
          <Switch>
            <Route path='/getStarted' component={GetStarted} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/programs' component={Programs} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/createuser' component={CreateUserComponent} />
            <Route path='/admin' component={Admin} />
            <Route path='/trainer' component={Trainer} />
            <Route path='/member' component={Member} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
