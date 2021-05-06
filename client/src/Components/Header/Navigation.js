import './Navigation.css'
import { useContext, useEffect, useState  } from 'react';
import { AuthContext } from '../../App';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


const Navigation = (props) => {

   const loggedInUser = useContext(AuthContext);

   const [cartCount, setCartCount] = useState(0);

   useEffect(() => {
      let count = 0;
      props.cart.forEach(item => {
         count += item.qty
      });
      setCartCount(count);
   }, [props.cart, cartCount])

   return (
      <nav className="navbar">
         <h1>eCommerce</h1>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
               <a>Category</a>
               <div className="dropdown_content">
                  <Link to="/category/clothes">Clothes</Link>
                  <Link to="/category/shoes">Shoes</Link>
                  <Link to="/category/hats">Hats</Link>
                  <Link to="/category/watches">Watches</Link>
               </div>
            </li>
            <li>
               <Link to="/contacts">Contacts</Link>
            </li>
            {loggedInUser
               ? (<>
                  <li className="cart_container">
                     {cartCount> 0
                        ? (
                           <span className="cart_counter">{cartCount}</span>
                        )
                        : ''
                     }
                     <Link to="/cart" className="user">Cart</Link>
                  </li>
                  <li>
                     <Link to="/profile" className="user">Profile</Link>
                  </li>
                  <li>
                     <Link to="/logout" className="user">Logout</Link>
                  </li>
               </>
               )
               : <li className="signIn"><Link to="/login">Sign in</Link></li>
            }
         </ul>
      </nav>
   );
}

const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};


export default connect(mapStateToProps)(Navigation);