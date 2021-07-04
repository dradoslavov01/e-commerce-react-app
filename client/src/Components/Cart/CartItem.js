import style from './CartItem.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useState, useEffect } from 'react';

import { removeFromCart, adjustQty } from '../../redux/actions';
import { connect } from 'react-redux';

const CartItem = (props) => {

   const [count, setCount] = useState(props.items.qty);

   const [itemPrice, setItemPrice] = useState(props.items.price);

   let currentPrice = props.items.price;

   useEffect(() => {
      setItemPrice((currentPrice * count).toFixed(2));
   }, [itemPrice, count, currentPrice]);

   const increment = (e) => {
      let value = Number(e.target.parentNode.children[1].textContent);
      value += 1;
      setCount(value);
      props.adjustQty(props.items._id, value);
   };

   const decrement = (e) => {
      if (count > 1) {
         let value = Number(e.target.parentNode.children[1].textContent);
         value -= 1;
         setCount(value);
         props.adjustQty(props.items._id, value);
      };
   };

   return (
      <section className={style.cartItem}>
         <img src={props.items.img} alt="img" />
         <h3>{props.items.title}</h3>
         <p>{props.items.price}$</p>
         <div className={style.quantity}>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
         </div>
         <h2>{itemPrice}$</h2>
         <DeleteForeverIcon onClick={() => props.removeFromCart(props.items._id)} className={style.remove_item} />
      </section>
   );
};

const mapDispatchToState = dispatch => {
   return {
      removeFromCart: (id) => dispatch(removeFromCart(id)),
      adjustQty: (id, value) => dispatch(adjustQty(id, value))
   };
};

export default connect(null, mapDispatchToState)(CartItem);