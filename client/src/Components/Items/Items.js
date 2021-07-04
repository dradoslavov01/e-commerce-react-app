import './Items.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useEffect } from 'react';
import { getAllItems } from '../../services/services';
import Spinner from '../Spinner/Spinner';

import { connect } from 'react-redux';
import { addToCart, addToFavorite, setProducts } from '../../redux/actions';

const ItemsPage = (props) => {


   const category = props.match.params.category;

   useEffect(() => {
      getAllItems(category)
         .then(res => {
            const items = category ? res.data.filter(item => item.category === category) : res.data;
            props.setProducts(items)
         })
         .catch(err => alert(err));
         
   }, [category])

   return (
      <div className="items_container">
         {props.products.length > 0
            ? props.products.map(item => {
               return (
                  <section key={item.id}>
                     {props.isLoggedIn
                        ? <FavoriteIcon onClick={() => props.addToFavorite(item.id)} className="fav_icon" />
                        : <FavoriteIcon onClick={() => props.history.push('/login')} className="fav_icon" />
                     }
                     <img src={item.img} alt="item_img" />
                     <h5>{item.title}</h5>
                     <p>{item.price}</p>
                     {props.isLoggedIn
                        ? <button onClick={() => props.addToCart(item.id)}>Add to cart</button>
                        : <button onClick={() => props.history.push('/login')}>Add to cart</button>
                     }
                  </section>
               )
            })
            : <Spinner />
         }
      </div>
   );
};

const mapToStateProps = state => {
   return {
      isLoggedIn: state.isLoggedIn,
      products: state.products
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setProducts: (products) => dispatch(setProducts(products)),
      addToCart: (id) => dispatch(addToCart(id)),
      addToFavorite: (id) => dispatch(addToFavorite(id))
   };
};


export default connect(mapToStateProps, mapDispatchToProps)(ItemsPage);