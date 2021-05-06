import style from './CartItem.module.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const CartItem = (props) => {
    return (
        <section className={style.cartItem}>
            <img src={props.items.img} alt="img" />
            <h3>{props.items.title}</h3>
            <p>{props.items.price}$</p>
            <div className={style.quantity}>
                <button >-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <h2>212.00$</h2>
            <DeleteForeverIcon className={style.remove_item} />
        </section>
    );
};



export default CartItem;