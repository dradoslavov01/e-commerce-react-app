import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';
import './App.css';

import Navigation from './Components/Header/Navigation';
import ItemsPage from './Components/Items/Items';
import LoginPage from './Components/Login/Login';
import RegisterPage from './Components/Register/Register';
import FooterPage from './Components/Footer/Footer';
import ContactsPage from './Components/Contacts/Contacts';
import CartPage from './Components/Cart/Cart';
import ParchasePage from './Components/Purchase/Purchase';
import ProfilePage from './Components/Profile/Profile';
import FavoriteItemsPage from './Components/FavoriteItems/FavoriteItems';

import { auth } from './utils/firebase';

export const AuthContext = React.createContext();

function App() {

  const [loggedInUser, setloggedInUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setloggedInUser);
  }, [loggedInUser]);


  return (
    <div className="App">
      <AuthContext.Provider value={loggedInUser}>
        <Navigation />

        <Route path="/" exact component={ItemsPage} />
        <Route path="/category/:category" component={ItemsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/purchase" component={ParchasePage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/profile/favorite-items" component={FavoriteItemsPage} />
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