import { Link } from 'react-router-dom';
import styles from './Signup.module.css'
import SocialAuthForm from '../../authentication/SocialAuthForm';

function Signup() {

    return <form method="POST" id={styles.loginBox}>
            <div className={styles.left}>
                <h1 className={styles.signup}>Sign up</h1>

                <label htmlFor="email">Email Address</label>
                <input className={styles.credInput} type="text" name='email' />

                <label htmlFor="password">Password</label>
                <input className={styles.credInput} type="password" name='password' />

                <label htmlFor="confirmation">Confirm Password</label>
                <input className={styles.credInput} type="password" name='confirmation' />

                <button type="submit" value="Sign me up" className='successBtn'>Submit</button>
                <p>Already have an account? <Link to="/login" className={styles.logInRedirect}>Log in</Link></p>
            </div>

            <div className={styles.or}>OR</div>

            <div className={styles.right}>
                <SocialAuthForm />
            </div>
        </form>
    }

export default Signup;
