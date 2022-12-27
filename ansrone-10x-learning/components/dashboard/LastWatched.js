import styles from "../../styles/dashboard/LastWatched.module.css";

const LastWatched = ({ lastWatched = [] }) => {
    return (
        <>
            <div className={styles.main}>
                <h2>Last Watched Lectures</h2>
                <div className={styles.container}>
                    {lastWatched.map((item, i) => (
                        <div className={styles.videoCard} key={i}>
                            <iframe
                                src={item.url}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <div className={styles.info}>
                                <p>{item.name}</p>

                                <svg viewBox="0 0 69 76" fill="none">
                                    <path d="M3.45312 54.9116V65.2076C3.45313 67.028 4.1763 68.7739 5.46356 70.0611C6.75082 71.3484 8.49672 72.0715 10.3172 72.0715H58.3656C60.1861 72.0715 61.932 71.3484 63.2192 70.0611C64.5065 68.7739 65.2297 67.028 65.2297 65.2076V54.9116M20.6133 37.7516L34.3414 51.4796L48.0695 37.7516M34.3414 3.43164V51.4796" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LastWatched;
