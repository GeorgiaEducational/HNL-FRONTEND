import styles from "./TeacherCard.module.css";
import { HeartBtn } from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

function TeacherCard({ teacherInfo, onSelectTeacher }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.teacherCard}
      onMouseEnter={() => onSelectTeacher(teacherInfo)}
      onClick={() => navigate(`/teacher-profile/${teacherInfo.id}`)}
    >
      <div className={styles.teacherReview}>
        <img
          className={styles.teacherImg}
          src={teacherInfo.image}
          alt={`${teacherInfo.fullName}`}
        />
        <p className={styles.rating}>⭐ {teacherInfo.rating}</p>
        <p className={styles.lessonsCount}>
          {teacherInfo.totalLectures} Lessons
        </p>
      </div>

      <div className={styles.infoDetails}>
        <h2 className={styles.fullName}>{teacherInfo.fullName}</h2>
        <h4 className={styles.lectureTitle}>{teacherInfo.lectureTitle}</h4>
        <p className={styles.language}>
          Speaks: <strong>{teacherInfo.Languages.join(", ")}</strong>
        </p>
        <p>{teacherInfo.aboutMe.slice(0, 350)}</p>

        <div className={styles.book}>
          <p className={styles.price}>
            <strong>USD {teacherInfo.price}</strong> / per lecture
          </p>

          <div className={styles.bookingActions}>
            <HeartBtn />
            <a
              className={styles.mainBtn}
              href={`/teacher-profile/${teacherInfo.id}`}
            >
              Book Lectures
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
