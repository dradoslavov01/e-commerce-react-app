import style from './Cart.module.css';


const CartPage = () => {
    return (
        <div className={style.cart_container}>
            <section>
                <img src="https://timer.bg/image/cache/catalog/products/Casio/GA100B4AER-1200x1200.jpg" alt="img" />
                <h3>Casio G-Shock</h3>
                <p>212.00$</p>
                <div className={style.quantity}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <h2>212.00$</h2>
            </section>
            <section>
                <img src="https://timer.bg/image/cache/catalog/products/Casio/GA100B4AER-1200x1200.jpg" alt="img" />
                <h3>Casio G-Shock</h3>
                <p>212.00$</p>
                <div className={style.quantity}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <h2>212.00$</h2>
            </section>
            <div className={style.cart_footer}>
                <button>Purchase</button>
                <h2>412.00$</h2>
            </div>
        </div>
    );
}

export default CartPage;