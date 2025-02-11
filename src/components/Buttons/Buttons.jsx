import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Buttons.module.css';
import fullHeartLogo from '../../assets/images/fullHeart.png';
import emptyHeartLogo from '../../assets/images/emptyHeart.png'


export function ExtendBtn() {
    return <div className={styles.extendBtn}>
        Extend &lt;&gt;
    </div>
};

export function CloseBtn({ onClick }) {
    return <div onClick={() => onClick(false)} className={styles.closeBtn}>
        &times;
    </div>
};

export function HeartBtn({ renderFullHeartOnly }) {

    const navigate = useNavigate();
    const [isFull, setIsFull] = useState(false);
    const res = renderFullHeartOnly || isFull;

    function handleOnClick() {
        // Later, we will add check if user is logged in or not, so based on it make a redirect
        // if user.logged_in () {}
        navigate('/login');
    }
    
    return <button className={styles.heartBtn}>
        <img 
            onMouseEnter={() => setIsFull(!isFull)}
            onMouseLeave={() => setIsFull(!isFull)}
            onClick={handleOnClick}
            src={res? fullHeartLogo: emptyHeartLogo} 
            className={styles.heartThumbnail} 
            alt="Add" 
        />
    </button>
};
