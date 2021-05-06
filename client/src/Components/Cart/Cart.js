import style from './Cart.module.css';
import CartItem from './CartItem';
import { connect } from 'react-redux';

const CartPage = (props) => {
   return (
      <div className={style.cart_container}>
         {props.cart.map(item => {
            return (
               <CartItem key={item.id} items={item} />
            )
         })}
         {props.cart.length > 0
            ? <div className={style.cart_purchase}>
               <button>Purchase</button>
               <h2>212.00$</h2>
            </div>
            : ''
         }

      </div>
   );
}

const mapToStateProps = state => {
   return {
      cart: state.cart
   };
};

export default connect(mapToStateProps)(CartPage);