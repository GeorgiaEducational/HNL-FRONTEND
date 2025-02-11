import { useState } from "react"
import emptyStar from '../../assets/images/emptyStar.png';
import fullStar from '../../assets/images/fullStar.png';
import styles from './Stars.module.css';


function Star( { filledStar = false, setRating, setPermanentVal, value } ) {

    return <img 
        className={styles.star} 
        src={filledStar? fullStar: emptyStar} 
        alt="star" 
        onMouseEnter={() => setPermanentVal(value + 1)}
        onClick={() => setRating(value + 1)}
    />
}

function Stars( {maxRating = 5, rating = 0, setRating = null} ) {

    const [permanentVal, setPermanentVal] = useState(0);

    return <div className="stars">
        {
            Array.from({ length: Number(maxRating) }, (_, i) => (
                <Star 
                    key={i} 
                    value={i} 
                    filledStar={rating? rating > i: permanentVal > i} 
                    setRating={setRating} 
                    setPermanentVal={setPermanentVal} 
                />
            ))
        }
    </div>
}

export default Stars;
