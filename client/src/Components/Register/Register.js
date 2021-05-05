import style from './Register.module.css';
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { auth } from '../../utils/firebase';

const RegisterPage = ({
    history
}) => {


    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePass = e.target.rePass.value;


        if (!email || !password || !rePass) {
            return alert('All fields are required!');
        }

        if(password !== rePass) {
            return alert('Passwords don\'t match!');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            }).catch(err => alert(err))
    };

    return (
        <div className={style.form_container}>
            <form className={style.form} onSubmit={onRegisterSubmitHandler}>
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
                <label htmlFor="pass">Confirm Password</label>
                <div className={style.input_content}>
                    <LockIcon className={style.icons} />
                    <input id="pass" type="password" name="rePass" placeholder="Confirm your password" />
                </div>
                <button>Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}


export default RegisterPage;