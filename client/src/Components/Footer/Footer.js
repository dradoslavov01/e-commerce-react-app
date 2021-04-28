import style from './Footer.module.css';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterPage = () => {
   return (
      <div className={style.footer_container}>
         <div className={style.left_side}>
            <div className={style.idk}>
               <LocationOnIcon className={style.icns} />
               <PhoneIcon className={style.icns} />
               <EmailIcon className={style.icns} />
            </div>
            <div className={style.info}>
               <p>21 Hristo Botev Street</p>
               <h3>Sofia, Bulgaria</h3>
               <h4>+1 333 123456</h4>
               <p>daniradoslavov@abv.bg</p>
            </div>
         </div>
         <div className={style.right_side}>
            <div className={style.about}>
               <h2>About company</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi et commodo rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               <div className="social_media">
                  <FacebookIcon className={style.social_media_icons} />
                  <InstagramIcon className={style.social_media_icons} />
                  <TwitterIcon className={style.social_media_icons} />
                  <LinkedInIcon className={style.social_media_icons} />
               </div>
            </div>
         </div>
      </div>

   );
}


export default FooterPage;