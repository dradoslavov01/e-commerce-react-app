import style from './Profile.module.scss';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { connect } from 'react-redux';

const ProfilePage = (props) => {

   return (
      <div className={style.profile_container}>
         <div className={style.profile_content}>
            <AccountBoxIcon className={style.profile_icon} />
            <h3>Username: {props.user != null ? props.user.username : ''}</h3>
            <p>Items in your cart: {props.cart.length}</p>
            <Link to="/profile/favorite-items" className={style.fav_items}>Favorite items: {props.favoriteItems.length}</Link>
         </div>
      </div>
   );
}

const mapStateToPtops = state => {
   return {
      cart: state.cart,
      favoriteItems: state.favoriteItems,
      user: state.user
   };
};



export default connect(mapStateToPtops)(ProfilePage);