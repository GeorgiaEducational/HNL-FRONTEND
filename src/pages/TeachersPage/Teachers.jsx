import IntroVideo from "../../components/IntroVideo/IntroVideo";
import Calendar from "../../components/Calendar/Calendar";

import styles from './Teachers.module.css';
import useFetchTeachers from "../../hooks/useFetchTeachers";
import Spinner from "../../components/Spinner/Spinner";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { ExtendBtn, CloseBtn } from '../../components/Buttons/Buttons';
import { useState } from "react";


function Teachers() {
    const [selectedTeacher, selectTeacher] = useState(null);
    const [showExtendedCalendar, setShowExtendedCalendar] = useState(false);
    const { loading, data, errors } = useFetchTeachers();

    return (
        <main className={styles.teachersContent}>
            {loading && <Spinner />}

            {errors && <>{errors}</>}

            {/* Add this div for the blur effect */}
            {showExtendedCalendar && (
                <div className={styles.overlay}>
                    <div className={styles.popupCalendar}>
                        <CloseBtn onClick={setShowExtendedCalendar} />
                        <Calendar 
                            key={selectedTeacher.id} 
                            availability={selectedTeacher.availability} 
                            showDemo={false} 
                        />
                    </div>
                </div>
            )}

            {!errors && (
                <>
                    <div className={styles.teachersList}>
                        {data.map((teacher) => (
                            <TeacherCard onSelectTeacher={selectTeacher} key={teacher.id} teacherInfo={teacher} />
                        ))}
                    </div>

                    <div className={styles.videoThumbnail}>
                        {selectedTeacher && (
                            <div className={styles.additionalResources} onClick={() => setShowExtendedCalendar(true)}>
                                <IntroVideo videoSrc={selectedTeacher.video} />
                                <Calendar key={selectedTeacher.id} availability={selectedTeacher.availability} />
                                <ExtendBtn />
                            </div>
                        )}
                    </div>
                </>
            )}
        </main>
    );
}


export default Teachers;
