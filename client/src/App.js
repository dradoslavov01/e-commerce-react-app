import { Route } from 'react-router';
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
import Spinner from './Components/Spinner/Spinner'



function App() {



  return (
    <div className="App">

        <Navigation />

        <Route path="/" exact component={ItemsPage} />
        <Route path="/category/:category" component={ItemsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/spinner" component={Spinner} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/purchase" component={ParchasePage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/profile/favorite-items" component={FavoriteItemsPage} />

        <FooterPage />
    </div>
  );
}

export default App;