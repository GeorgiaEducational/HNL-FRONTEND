import styles from './SocialAuthForm.module.css';

const SocialAuthForm = () => {

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/accounts/google/login/";
    };

    return <>
        <button type='button' className={`${styles.socialSignin} ${styles.facebook}`}>Log in with Facebook</button>
        <button type='button' className={`${styles.socialSignin} ${styles.twitter}`}>Log in with Twitter</button>
        <button type='button' className={`${styles.socialSignin} ${styles.google}`} onClick={handleGoogleLogin}>Log in with Google</button>
    </>


};

export default SocialAuthForm;