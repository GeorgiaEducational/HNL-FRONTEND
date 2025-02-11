import { useState } from 'react';
import styles from "./Calendar.module.css";


const WeekdayMap = {
    0: "Mon",
    1: "Tu",
    2: "We",
    3: "Th",
    4: "Fr",
    5: "Sa",
    6: "Su"
};


function Calendar({ availability, showDemo = true }) {
    const [hoveredCell, setHoveredCell] = useState(null);
    const totalHoursDemoCalendar = showDemo ? 6 : 24;

    return <>
        <div className="availability">
            <table>
                <thead>
                    <tr className={styles.weekdays}>
                        <th></th>
                        {
                            Array.from({ length: Object.keys(WeekdayMap).length }, (_, weekDayIndex) => {
                                return <th key={weekDayIndex}>{WeekdayMap[weekDayIndex]}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>

                {
                    Array.from({ length: totalHoursDemoCalendar }, (_, hourCell) => {
                        const multiplier = 24 / totalHoursDemoCalendar;
                        const startTime = hourCell * multiplier;
                        const endTime = startTime + multiplier;

                        const formattedRange = `${startTime < 10 ? `0${startTime}` : startTime}-${endTime < 10 ? `0${endTime}` : endTime}`;

                        return (
                            <tr key={hourCell} className={styles.hourCell}>
                                <td key={formattedRange} className={styles.hourRange}>{formattedRange}</td>
                                {
                                    Array.from({ length: 7 }, (_, weekDay) => {
                                        const availableHours = availability[weekDay];
                                        
                                        return <td key={weekDay} className={styles.dayFrame}>
                                            {
                                                Array.from({ length: multiplier }, (_, hourCellIndex) => {
                                                    const currentCellTime = hourCellIndex + (multiplier * hourCell);
                                                    const isAvailable = availableHours.includes(currentCellTime);
                                                    const formattedCellRange = `${currentCellTime < 10 ? `0${currentCellTime}:00` : `${currentCellTime}:00`} - ${currentCellTime + 1 < 10 ? `0${currentCellTime + 1}:00` : `${currentCellTime + 1}:00`}`;
                                                    const cellId = `${weekDay}${currentCellTime}`;

                                                    return <div
                                                            key={hourCellIndex} 
                                                            className={isAvailable ? `${styles.available} ${styles.cellFrame}`: styles.cellFrame}
                                                            onMouseEnter={() => setHoveredCell(cellId)}
                                                            onMouseLeave={() => setHoveredCell(null)}
                                                        >
                                                        {
                                                            hoveredCell === cellId && 
                                                            <p 
                                                                key={cellId} 
                                                                className={styles.infoTxt}
                                                            >
                                                                {isAvailable ? 'Available': 'Unavailable'} {WeekdayMap[weekDay]}, {formattedCellRange}
                                                            </p>
                                                        }
                                                    </div>
                                                })
                                            }
                                        </td>
                                    })
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    </>
}

export default Calendar;
