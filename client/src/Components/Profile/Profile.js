import style from './Profile.module.scss';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { connect } from 'react-redux';

const ProfilePage = (props) => {
   // const user = useContext(AuthContext);
   // let index;
   // if(user != null) {
   //    index = user.email.indexOf('@');
   //    console.log(index);
   // }

   return (
      <div className={style.profile_container}>
         <div className={style.profile_content}>
            <AccountBoxIcon className={style.profile_icon} />
            {/* <h3>Username: {user != null ? user.email.slice(0, index) : ''}</h3> */}
            <p>Items in your cart: {props.cart.length}</p>
            <Link to="/profile/favorite-items" className={style.fav_items}>Favorite items: {props.favoriteItems.length}</Link>
         </div>
      </div>
   );
}

const mapStateToPtops = state => {
   return {
      cart: state.cart,
      favoriteItems: state.favoriteItems
   };
};



export default connect(mapStateToPtops)(ProfilePage);