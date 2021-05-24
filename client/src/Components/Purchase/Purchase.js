import style from './Purchase.module.scss';
import { Link } from 'react-router-dom';

const PurchasePage = () => {
    return (
        <div className={style.purchase_container}>
            <h2>You have successfully made your purchase!</h2>
            <p>Go back to <Link to="/">store</Link></p>
        </div>
    );
}




export default PurchasePage;