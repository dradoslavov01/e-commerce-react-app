import style from './Login.module.css';
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { auth } from '../../utils/firebase'

const LoginPage = ({
    history
}) => {

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(!email || !password) {
            return alert('All fields are required!')
        }

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/');
            })
            .catch(err => alert(err));
    };

    return (
        <div className={style.form_container}>
            <form className={style.form} onSubmit={onLoginFormSubmitHandler}>
                <h2>Sign In</h2>
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
                <button>Sign In</button>
                <p> Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
}


export default LoginPage;