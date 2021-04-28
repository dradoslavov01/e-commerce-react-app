import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './App.css';

import Navigation from './Components/Header/Navigation';
import HomePage from './Components/Home/Home';
import LoginPage from './Components/Login/Login';
import RegisterPage from './Components/Register/Register';
import FooterPage from './Components/Footer/Footer';
import ContactsPage from './Components/Contacts/Contacts'





function App() {
  const [className, setClassName] = useState('');

  useEffect(() => {
    setClassName('loaded')
  }, []);

  return (
    <div className="App">
      <Navigation />

      <Route path="/" exact component={HomePage} />
      <Route path="/category/:category" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/contacts" component={ContactsPage} />

      
      <FooterPage />

    </div>
  );
}

export default App;
