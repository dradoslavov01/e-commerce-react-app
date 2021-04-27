import './Navigation.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => { 

   const [className, setClassName] = useState('');

   useEffect(() => {
      setClassName('loaded')
   }, []);

   return (
      <header className={`${className}`}>
         <h1>eCommerce</h1>

         <nav className="navbar">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li className="dropdown">
                  <a>Category</a>
                  <div className="dropdown_content">
                     <Link to="/category/clothes">Clothes</Link>
                     <Link to="/category/shoes">Shoes</Link>
                     <Link to="/category/hats">Hats</Link>
                     <Link to="/category/watches">Watches</Link>
                  </div>
               </li>
               <li><Link to="/contacts">Contacts</Link></li>
               <li className="signIn"><Link to="/login">Sign In</Link></li>
            </ul>
         </nav>

         <section>
            <h2>Our store offers you some of the best and highest quality clothes, shoes etc. on the market.</h2>
            <p>Visit our shop and choose the best item for you.</p>
         </section>
      </header>
   );
}




export default Navigation;