import './Items.css';
import { useEffect, useState } from 'react';
import { getAllItems } from '../../services/services';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';

const ItemsPage = (props) => {

  const [items, setItems] = useState([]);

  const category = props.match.params.category;

  useEffect(() => {
    getAllItems(category)
      .then(data => setItems(data))
      .catch(err => alert(err));
  }, [category]);

  return (
    <div className="items_container">
      {items.map(item => {
        return (
          <section key={item.id}>
            <img src={item.img} alt="item_img" />
            <h5>{item.title}</h5>
            <p>{item.price}</p>
            <button onClick={() => props.addToCart(item.id)}>Add to cart</button>
          </section>
        )
      })};
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};


export default connect(null, mapDispatchToProps)(ItemsPage);