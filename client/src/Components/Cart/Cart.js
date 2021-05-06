import style from './Cart.module.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';

import { removeAllItems } from '../../redux/actions'
import { connect } from 'react-redux';

const CartPage = (props) => {

   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      let price = 0;
      props.cart.forEach(item => price += (item.price * item.qty));
      setTotalPrice(price.toFixed(2));
   }, [props.cart, totalPrice, setTotalPrice]);


   return (
      <div className={style.cart_container}>
         {props.cart.map(item => {
            return (
               <CartItem key={item.id} items={item} />
            )
         })}
         {props.cart.length > 0
            ? <div className={style.cart_purchase}>
               <button onClick={() => props.removeAllItems()}>Purchase</button>
               <h2>{totalPrice}$</h2>
            </div>
            : <div className={style.empty_cart}>
               <h2>Your cart is empty!</h2>
               <p>Visit our <Link to="/">store</Link> and choose the best items for you.</p>
            </div>
         }
      </div>
   );
}

const mapToStateProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToState = dispatch => {
   return {
      removeAllItems: () => dispatch(removeAllItems())
   };
};

export default connect(mapToStateProps, mapDispatchToState)(CartPage);