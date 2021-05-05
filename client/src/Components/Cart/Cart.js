import style from './Cart.module.css';
import CartItem from './CartItem'

const CartPage = () => {


    return (
        <div className={style.cart_container}>
            <CartItem />
            
            <div className={style.cart_purchase}>
                <button>Purchase</button>
                <h2>212.00$</h2>
            </div>
        </div>
    );
}

export default CartPage;