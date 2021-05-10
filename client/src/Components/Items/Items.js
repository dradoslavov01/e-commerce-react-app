import './Items.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useEffect, useState, useContext } from 'react';
import { getAllItems } from '../../services/services';
import { AuthContext } from '../../App';

import { connect } from 'react-redux';
import { addToCart, addToFavorite } from '../../redux/actions';

const ItemsPage = (props) => {
   const [items, setItems] = useState([]);
   const isLoggedInUser = useContext(AuthContext);

   const category = props.match.params.category;

   useEffect(() => {
      getAllItems(category)
         .then(data => setItems(data))
         .catch(err => alert(err))
   }, [category]);

   return (
      <div className="items_container">
         {items.map(item => {
            return (
               <section key={item.id}>
                  { isLoggedInUser
                     ? <FavoriteIcon onClick={() => props.addToFavorite(item.id)} className="fav_icon" />
                     : <FavoriteIcon onClick={() => props.history.push('/login')} className="fav_icon" />
                  }
                  <img src={item.img} alt="item_img" />
                  <h5>{item.title}</h5>
                  <p>{item.price}</p>
                  { isLoggedInUser
                     ? <button onClick={() => props.addToCart(item.id)}>Add to cart</button>
                     : <button onClick={() => props.history.push('/login')}>Add to cart</button>
                  }
               </section>
            )
         })};
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addToCart: (id) => dispatch(addToCart(id)),
      addToFavorite: (id) => dispatch(addToFavorite(id))
   };
};


export default connect(null, mapDispatchToProps)(ItemsPage);