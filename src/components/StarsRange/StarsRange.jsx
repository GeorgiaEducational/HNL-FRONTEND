import { useContext, useState } from "react";

import Stars from "../Stars/Stars";
import downArrow from '../../assets/images/down-arrow.png';
import styles from '../NumberRange/NumberRange.module.css';
import fullStar from '../../assets/images/fullStar.png';
import minusSymbol from '../../assets/images/minus.png';
import { TeachersQueryContext } from "../../context/TeachersQueryContext";

function StarsRange( {placeholder} ) {
    const [showRangeForm, setShowRangeForm] = useState(false);
    const {minRating, maxRating, setMinRating, setMaxRating} = useContext(TeachersQueryContext);

    function handleSubmit(e) {
        e.preventDefault();
        setShowRangeForm(false);
    };

    function resetForm() {
        setMinRating(0);
        setMaxRating(0);
    };

    const hasRangeFilter = Boolean(minRating || maxRating);

    return <form className="rangeFormContainer" onSubmit={(e) => handleSubmit(e)}>
        <input 
            readOnly
            type="text" 
            className={`${styles.priceInput} searchInput ${hasRangeFilter? 'underline': ''}`} 
            placeholder={minRating || maxRating ? null: placeholder}
            onClick={() => setShowRangeForm(!showRangeForm)}
        />
        <div className={`${styles.searchInputResult} ${minRating || maxRating ? 'activated' : 'hidden'}`}>
            {
                Array.from({ length: Number(minRating) }, (_, i) => (
                    <img key={i} src={fullStar} className={styles.star} alt="star" />
                ))
            }
            <img src={minusSymbol} className="minusSymbol" alt="to" />
            {
                Array.from({ length: Number(maxRating) }, (_, i) => (
                    <img key={i} src={fullStar} className={styles.star} alt="star" />
                ))
            }
        </div>
        <img className={styles.downArrow} src={downArrow} alt="down-arrow" />
        
        <div className={`${showRangeForm? 'activated': 'hidden'} rangeForm`}>

            <div className="rangesInput">
                <div className="range">
                    <label htmlFor="min-value">Min</label>
                    <Stars maxRating={5} rating={minRating} setRating={setMinRating} />
                </div>
                <div className="range">
                    <label htmlFor="min-value">Max</label>
                    <Stars maxRating={5} rating={maxRating} setRating={setMaxRating} />
                </div>
            </div>
            
            <div className="rangeOptions">
            <p className="reset" onClick={() => resetForm()}>reset</p>
                <button className="okBtn mainBtn">Ok</button>
            </div>

        </div>
    </form>
}

export default StarsRange;
