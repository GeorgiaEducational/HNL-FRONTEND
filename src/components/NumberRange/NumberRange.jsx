import styles from './NumberRange.module.css';
import downArrow from '../../assets/images/down-arrow.png'
import { useContext, useState } from 'react';
import { TeachersQueryContext } from '../../context/TeachersQueryContext';

function NumberRangeForm( {placeholder} ) {
    
    const [title, setTitle] = useState('');
    const [showRangeForm, setShowRangeForm] = useState(false);
    const {minNumber, maxNumber, setMinNumber, setMaxNumber} = useContext(TeachersQueryContext); 

    function handleSubmit(e) {
        e.preventDefault();
        setShowRangeForm(false);
        setTitle(`From ${minNumber} $ - to ${maxNumber} $`);
    };

    function resetForm() {
        setMinNumber(0);
        setMaxNumber(0);
    };

    const hasRangeFilter = Boolean(minNumber || maxNumber);

    return <form className="rangeFormContainer" onSubmit={(e) => handleSubmit(e)}>
        <input 
            type="text" 
            className={`${styles.priceInput} searchInput ${hasRangeFilter? 'underline': ''}`} 
            placeholder={placeholder}
            onClick={() => setShowRangeForm(!showRangeForm)}
            value={title}
        />
        <img className={styles.downArrow} src={downArrow} alt="down-arrow" />

        <div className={`${showRangeForm? 'activated': 'hidden'} rangeForm`}>

            <div className="rangesInput">
                <div className="range">
                    <label htmlFor="min-value">Min</label>
                    <input 
                        type="number" 
                        name="min-value" 
                        min={0} 
                        value={minNumber}
                        onChange={(e) => setMinNumber(e.target.value)}
                    />
                </div>
                <div className="range">
                    <label htmlFor="max-value">Max</label>
                    <input 
                        type="number" 
                        name="max-value" 
                        min={0}
                        value={maxNumber}
                        onChange={(e) => setMaxNumber(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="rangeOptions">
                <p className="reset" onClick={() => resetForm()}>reset</p>
                <button className="okBtn mainBtn">Ok</button>
            </div>

        </div>
    </form>
}

export default NumberRangeForm;
