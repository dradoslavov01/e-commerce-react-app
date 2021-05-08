import style from './Profile.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../App';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { connect } from 'react-redux';

const ProfilePage = (props) => {
   const user = useContext(AuthContext);

   return (
      <div className={style.profile_container}>
         <div className={style.profile_content}>
            <AccountBoxIcon className={style.profile_icon} />
            <h3>Username: {user != null ? user.email.slice(0, -7) : ''}</h3>
            <p>Items in your cart: {props.cart.length}</p>
            <Link to="/profile/favorite-items" className={style.fav_items}>Favorite items</Link>
         </div>
      </div>
   );
}

const mapStateToPtops = state => {
   return {
      cart: state.cart
   };
};


export default connect(mapStateToPtops)(ProfilePage);