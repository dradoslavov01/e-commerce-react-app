import style from './Register.module.css';
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

const RegisterPage = () => {
    return (
        <div className={style.form_container}>
            <form className={style.form}>
                <h2>Create an account</h2>
                <label htmlFor="email">Email</label>
                <div className={style.input_content}>
                    <EmailIcon className={style.icons} />
                    <input id="email" type="text" name="email" placeholder="Enter your email" />
                </div>
                <label htmlFor="pass">Password</label>
                <div className={style.input_content}>
                    <LockIcon className={style.icons} />
                    <input id="pass" type="password" name="password" placeholder="Enter your password" />
                </div>
                <label htmlFor="pass">Password</label>
                <div className={style.input_content}>
                    <LockIcon className={style.icons} />
                    <input id="pass" type="password" name="password" placeholder="Confirm your password" />
                </div>
                <button>Sign Up</button>
                <p> Don't have an account? <Link to="/login">Register</Link></p>
            </form>
        </div>
    );
}


export default RegisterPage;