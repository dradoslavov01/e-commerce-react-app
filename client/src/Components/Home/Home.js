import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllItems } from '../../services/services'

const HomePage = ({
  match
}) => {

   const [items, setItems] = useState([]);

  const category = match.params.category;

   useEffect(() => {
     getAllItems(category)
         .then(data => setItems(data))
         .catch(err => alert(err));
   }, [category]);

   return (
     <div className="items_container">
       {items.map(item => {
         return(
           <section>
             <img src={item.img} alt="item_img" />
             <h5>{item.title}</h5>
             <p>{item.price}</p>
             <button>Add to cart</button>
           </section>
         )
       })}
     </div>
   );
}


export default HomePage;