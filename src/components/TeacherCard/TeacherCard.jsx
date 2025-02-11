import styles from './TeacherCard.module.css';
import { HeartBtn } from '../Buttons/Buttons';

function TeacherCard({ teacherInfo, onSelectTeacher }) {

    return <div className={styles.teacherCard} onMouseEnter={() => onSelectTeacher(teacherInfo)}>
        <div className={styles.teacherReview}>
            <img className={styles.teacherImg} src={teacherInfo.image} alt="Someone Image"/>
            <p className={styles.rating}>⭐ {teacherInfo.rating}</p>
            <p className={styles.lessonsCount}>{teacherInfo.totalLectures} Lessons</p>
        </div>

        <div className={styles.infoDetails}>
            <h2 className={styles.fullName}>{teacherInfo.fullName}</h2>
            <h4 className={styles.lectureTitle}>{teacherInfo.lectureTitle}</h4>
            <p className={styles.language}>Speaks: <strong>{teacherInfo.Languages.join(', ')}</strong></p>
            <p>{teacherInfo.description.slice(0, 350)}</p>
            
            <div className={styles.book}>
                <p className={styles.price}><strong>USD {teacherInfo.price}</strong> / per lecture</p>

                <div className={styles.bookingActions}>
                    <HeartBtn />
                    <a className={styles.mainBtn} href="#">Book Lectures</a>
                </div>
            </div>
        </div>
    </div>
}

export default TeacherCard;
