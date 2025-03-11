import styles from './Home.module.css';
import NumberRangeForm from '../../components/NumberRange/NumberRange';
import StarsRange from '../../components/StarsRange/StarsRange';
import { useContext } from 'react';
import { TeachersQueryContext } from '../../context/TeachersQueryContext';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const { 
        title, 
        minNumber, 
        maxNumber, 
        minRating, 
        maxRating, 
        setTitle 
    } = useContext(TeachersQueryContext);

    function handleClick() {
        const queryParams = `?minNumber=${minNumber}&maxNumber=${maxNumber}&minRating=${minRating}&maxRating=${maxRating}&title=${title}`;

        navigate(`/teachers${queryParams}`);
    }

    return <div className={styles.content}>

    <div className={styles.searchDiv}>
        <h2 className={styles.searchTitle}>Find your teacher!</h2>

        <div className={styles.searchCriteria}>
            <input 
                type="text" 
                className={`${styles.titleInput} ${styles.searchInput} ${title? 'underline': ''}`} 
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <NumberRangeForm placeholder={"Price per lecture"} />
            <StarsRange placeholder={"Rating"} />
            <button className="mainBtn" onClick={handleClick}>Find now</button>
        </div>
    </div>

</div>
}

export default Home;
