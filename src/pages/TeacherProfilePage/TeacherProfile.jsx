import IntroVideo from "../../components/IntroVideo/IntroVideo";

import useGetTeacher from "../../hooks/useGetTeacher";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import styles from "./TeacherProfile.module.css";
import Avatar from "../../components/Avatar/Avatar";
import React, { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import { dateStrFormatter } from "../../utils/helpers";

export default function TeacherProfile() {
  const { id } = useParams();
  const [showFullText, setShowFullText] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const TabsMap = {
    about: "About Me",
    education: "Education & Experience",
    lessons: "My lessons & teaching style",
  };

  const { loading, data, errors } = useGetTeacher(id);

  if (loading) return <Spinner />;

  const activePlans = data.activePlans;
  const reviews = data.reviews;

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        {/* <!-- LEFT: Profile --> */}
        <section className={styles.profile}>
          {/* <!-- TOP: avatar on the left, name/role + teaches/speaks on the right --> */}
          <div className={styles.profileTop}>
            {/* <!-- Left rail: avatar + visited --> */}
            <div className={styles.leftRail}>
              {data.image ? (
                <img
                  className={styles.teacherImg}
                  src={`/${data.image}`}
                  alt={`${data.fullName}`}
                />
              ) : (
                <Avatar initialChar={data.fullName[0]} />
              )}

              {/* <!-- Visited under avatar --> */}
              <div className={`${styles.visited} ${styles.visitedUnder}`}>
                <div className={styles.visitedDot}></div>
                <div className={styles.visitedWhen}>
                  <strong>An hour ago</strong>
                </div>
              </div>
            </div>

            {/* <!-- Right rail: name, role, teaches/speaks --> */}
            <div className={styles.rightRail}>
              <h1 className={styles.name}>{data.fullName}</h1>

              {/* <!-- Teaches/Speaks sit to the right of the avatar --> */}
              <div className={`${styles.info} ${styles.twoCol}`}>
                <div className={styles.kv}>
                  <p className={styles.k}>Teaches:</p>
                  <p className={styles.v}>{data.lectureTitle}</p>
                </div>

                <div className={styles.kv}>
                  <p className={styles.k}>
                    Speaks: <strong>{data.Languages.join(", ")}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.strap}>{data.bio}</p>

          <nav className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "about" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </button>

            <button
              className={`${styles.tab} ${
                activeTab === "education" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>

            <button
              className={`${styles.tab} ${
                activeTab === "lessons" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("lessons")}
            >
              My lessons &amp; teaching style
            </button>
          </nav>

          <div className={styles.about}>
            <div className={styles.facts}>
              <div className={styles.fact}>
                <span className={styles.label}>Living in</span>
                {data.location}
              </div>
              <div className={styles.since}>
                hnl teacher since {dateStrFormatter(data.registeredAt)}
              </div>
            </div>

            <h2 className={styles.sectionTitle}>{TabsMap[activeTab]}</h2>

            {activeTab == "about" ? (
              <div className={styles.chips}>
                <span className="k">Tags</span>
                {data.tags.map((val, idx) => (
                  <span key={idx} className={styles.chip}>
                    {val}
                  </span>
                ))}
              </div>
            ) : null}

            <p className={styles.bio}>
              {showFullText ? data.aboutMe : data.aboutMe.slice(0, 1000)}
            </p>

            <a
              onClick={() => setShowFullText(!showFullText)}
              className={styles.readMore}
              aria-label="Read more"
            >
              {showFullText ? "Show less" : "Read more"}
            </a>
          </div>
        </section>

        <section className={styles.statsCard}>
          <div className={styles.stat}>
            <div className={`${styles.statValue} ${styles.rating}`}>
              <svg
                className={styles.star}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.5l2.9 6 6.6.6-5 4.4 1.5 6.4L12 16.9 6 19.9l1.5-6.4-5-4.4 6.6-.6L12 2.5z"></path>
              </svg>
              <span>{data.rating.toFixed(1)}</span>
            </div>
            <div className={styles.statLabel}>Rating</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statValue}>{data.totalStudents}</div>
            <div className={styles.statLabel}>Students</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statValue}>{data.totalLectures}</div>
            <div className={styles.statLabel}>Lessons</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statValue}>
              {data.attendanceRate.toFixed(0)}%
            </div>
            <div className={styles.statLabel}>Attendance rate</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statValue}>
              {data.responseRate.toFixed(0)}%
            </div>
            <div className={styles.statLabel}>Response rate</div>
          </div>
        </section>

        <section className={styles.lessons}>
          <h2 className={styles.sectionTitle}>Active plans</h2>

          <div className={styles.lessonsCard}>
            {activePlans.map((activePlan, idx) => (
              <React.Fragment key={idx}>
                <article className={styles.lessonRow}>
                  <div className={styles.lessonLeft}>
                    <h3 className={styles.lessonName}>{activePlan.planName}</h3>
                    <p className={styles.lessonSub}>
                      {activePlan.lessonsCompleted} lessons completed
                    </p>
                  </div>
                  <div className={styles.lessonRight}>
                    <span className={styles.pricePill}>
                      GEL {activePlan.planPrice.toFixed(2)}+
                    </span>
                  </div>
                </article>

                <hr className={styles.lessonSep} />
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className={styles.calendar}>
          <h2 className={styles.sectionTitle}>Availability</h2>
          <Calendar key={data.id} availability={data.availability} />
        </section>

        <section class={styles.reviews}>
          <h2 class={styles.reviewsTitle}>{data.reviews.length} Reviews</h2>

          <div class={styles.reviewsCard}>
            {reviews.map((review, idx) => (
              <div class={styles.reviewsGrid} key={idx}>
                <article class={styles.review}>
                  <div class={styles.reviewHead}>
                    <div class={`${styles.avatar} ${styles.bgYellow}`}>A</div>
                    <div class={styles.who}>
                      <div class={styles.name}>{review.fullName}</div>
                    </div>
                  </div>
                  <p class={styles.body}>{review.reviewText}</p>
                  <div class={styles.date}>{dateStrFormatter(review.date)}</div>
                </article>
              </div>
            ))}
          </div>
          {reviews.length > 5 ? (
            <button class={styles.showMore} type="button">
              Show more
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path
                  d="M4 6l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          ) : null}
        </section>
      </main>

      <div className={styles.videoThumbnail}>
        <IntroVideo videoSrc={data.video} />
        <div className={styles.card}>
          <button className="mainBtn">Book lesson</button>
          <button className="ghostBtn">Contact teacher</button>
        </div>
      </div>
    </div>
  );
}
