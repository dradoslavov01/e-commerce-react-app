import style from './Contacts.module.css';
import { useState } from 'react';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


const ContactsPage = () => {

   const [feedback, setFeedback] = useState(false);
   const [errorMsg, setErrorMsg] = useState(false);

   const sendMsg = (e) => {
      e.preventDefault();

      let name = e.target.name.value;
      let email = e.target.email.value;
      let msg = e.target.msg.value;

      if (!name || !email || !msg) {
         return setErrorMsg(true);
      } else {
         setErrorMsg(false);
         e.target.name.value = '';
         e.target.email.value = '';
         e.target.msg.value = '';
      }

      setFeedback(true);
      setTimeout(() => {
         setFeedback(false)
      }, 6000);
   };

   return (
      <>
         { feedback
            ? <div className={style.feedback_msg}>
               <h3>Thank you for contacting us!</h3>
            </div>
            : ''
         }
         <div className={style.contacts_container}>
            <form onSubmit={sendMsg}>
               <h2>Contact Us</h2>
               {errorMsg
                  ? <div className={style.errorMsg}>
                     <p>All fields are required!</p>
                  </div>
                  : ''
               }
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
                  <h5>daniradoslavov@abv.bg</h5>
               </div>
            </div>
         </div>
      </>
   );
}


export default ContactsPage;