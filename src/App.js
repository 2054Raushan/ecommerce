import React from 'react';
import {Switch ,  Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.component';
import HatsPage from './pages/hating';

import ShopPage from './pages/shop/shop.component';
import contactPage from './pages/contact/contact.component';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/contact-us' component={contactPage} />
        <Route exact path='/signin' component={signInAndSignUpPage} />
      </Switch>
      
    </div>
      
  );
}

export default App;
