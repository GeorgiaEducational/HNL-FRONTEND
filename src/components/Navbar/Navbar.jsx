import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuthentication } from '../../authentication/Auth';

function Navbar() {
    const {isAuthorized, logout} = useAuthentication();
        
    return <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
            <Link to="/">
                <h2 className="title">Hire & Learn</h2>
            </Link>
        </div>
        <div className={styles.navbarContainer}>
            <Link to="/">
                <p className={styles.navItem}>Home</p>
            </Link>
            <Link to="/about">
                <p className={styles.navItem}>About</p>
            </Link>
            {isAuthorized? 
                <Link to="/login" className='logout' onClick={logout}>
                    <p className={styles.navItem}>Log out</p>
                </Link>: 
            <>
                <Link to="/login" className='login'>
                    <p className={styles.navItem}>Log in</p>
                </Link>
            </>
            }
        </div>
    </nav>
}

export default Navbar;
