import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';
import './App.css';

import Navigation from './Components/Header/Navigation';
import HomePage from './Components/Home/Home';
import LoginPage from './Components/Login/Login';
import RegisterPage from './Components/Register/Register';
import FooterPage from './Components/Footer/Footer';
import ContactsPage from './Components/Contacts/Contacts';
import CartPage from './Components/Cart/Cart'

import { auth } from './utils/firebase';

export const AuthContext = React.createContext();

function App() {

  const [loggedInUser, setloggedInUser] = useState(null);

  console.log(loggedInUser);
  useEffect(() => {
    auth.onAuthStateChanged(setloggedInUser);
  }, [loggedInUser]);


  return (
    <div className="App">
      <AuthContext.Provider value={loggedInUser}>
        <Navigation />

        <Route path="/" exact component={HomePage} />
        <Route path="/category/:category" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/logout" render={() => {
          auth.signOut();
          return <Redirect to="/" />
        }}
        />

        <FooterPage />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
