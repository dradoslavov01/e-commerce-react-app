import style from './FavoriteItems.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { connect } from 'react-redux';
import { addToCart, removeFromFavorite } from '../../redux/actions';

const FavoriteItemsPage = (props) => {
   return (
      <>
         <div className={style.container}>
            <FavoriteIcon className={style.fav_icon} />
         </div>
         <div className={style.items_container}>
            {props.favoriteItems.length === 0
               ? <h2>You have no favorite items</h2>
               : props.favoriteItems.map(item => {
                  console.log(props.favoriteItems);
                  return (
                     <section key={item._id}>
                        <DeleteForeverIcon onClick={() => props.removeFromFavorite(item._id)} className={style.remove} />
                        <img src={item.img} alt="item_img" />
                        <h5>{item.title}</h5>
                        <p>{item.price}</p>
                        <button onClick={() => props.addToCart(item._id)}>Add to cart</button>
                     </section>
                  );
               })
            }
         </div>
      </>

   );
};

const mapStateToProps = state => {
   return {
      favoriteItems: state.favoriteItems
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addToCart: (id) => dispatch(addToCart(id)),
      removeFromFavorite: (id) => dispatch(removeFromFavorite(id))
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItemsPage);