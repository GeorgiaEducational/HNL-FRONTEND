import { Link } from 'react-router-dom';
import styles from '../SignupPage/Signup.module.css';
import SocialAuthForm from '../../authentication/SocialAuthForm';

function Login() {

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    return <form method="POST" id={styles.loginBox} onSubmit={handleSubmit}>
        <div className={styles.left}>
            <h1 className={styles.signup}>Log in</h1>

            <label htmlFor="email">Email Address</label>
            <input className={styles.credInput} type="text" name='email' />

            <label htmlFor="password">Password</label>
            <input className={styles.credInput} type="password" name='password' />

            <button type="submit" value="Sign me up" className='successBtn'>Submit</button>
            <p>Have not account yet? <Link to="/signup" className={styles.logInRedirect}>Sign up</Link></p>
        </div>

        <div className={styles.or}>OR</div>

        <div className={styles.right}>
            <SocialAuthForm />
        </div>

    </form>
}

export default Login;
