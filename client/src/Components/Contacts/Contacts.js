import style from './Contacts.module.css';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


const ContactsPage = () => {
   return (
      <div className={style.contacts_container}>
         <form>
            <h2>Contact Us</h2>
            <input type="text" name="name" placeholder="Enter your Name" />
            <input type="text" name="email" placeholder="Enter a valid email addres" />
            <textarea cols="20" rows="5" type="text" name="msg" placeholder="Enter your message" />
            <button>Send</button>
         </form>

         <div className={style.contacts_content}>
            <div className={style.contacts_icons}>
               <LocationOnIcon className={style._icons} />
               <PhoneIcon className={style._icons} />
               <EmailIcon className={style._icons} />
            </div>

            <div className={style.information}>
               <p>21 Hristo Botev Street</p>
               <h3>Sofia, Bulgaria</h3>
               <h4>+1 333 123456</h4>
               <span>daniradoslavov@abv.bg</span>
            </div>
         </div>
      </div>
   );
}


export default ContactsPage;