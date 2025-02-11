import styles from "./IntroVideo.module.css";

function IntroVideo( { videoSrc } ) {

    return <div className="videoThumbnail">
        <video key={videoSrc} id={styles.introVideo} controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
}

export default IntroVideo;
