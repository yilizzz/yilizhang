import styles from '../styles/Introtext.module.css';
export default function Introtext({title, description}) {
    return (
        <div>
            <div className={`${styles.h1} ${styles['text-pop-up-top']}`}>
                {title}
            </div>
            <div className={styles.h1} >
                {description}
            </div>
        </div>
    )
}