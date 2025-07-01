import { useState } from 'react'
import styles from '../styles/Projectdetails.module.css'

// get fontawesome imports
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// If the value of the key detail is an array, it will be displayed as a list; 
// if it is a string, it will be displayed directly
function ShowContent({ project, detail }) {
    const content = project[detail]
    return Array.isArray(content) ? (
        <ul>
            {content.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    ) : typeof content === 'string' ? (
        <p>{content}</p>
    ) : (<p>default</p>)
}
function Projectdetails({ project, detail }) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div role="button">
            
            {isOpen ? (
                <div className={styles.detailopen}>
                    <div
                        className={styles.togglebutton}
                        onClick={() => setIsOpen(false)}
                    >
                        {/* <span>{detail[0].toUpperCase() + detail.slice(1)}</span> */}
                        <span>{detail[0].toUpperCase() + detail.slice(1)}</span>
                        <span>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </span>
                    </div>

                    <div className={styles.detail}>
                        {ShowContent({ project, detail })}
                    </div>
                </div>
            ) : (
                <div className={styles.detailclosed}>
                    <div
                        className={styles.togglebutton}
                        onClick={() => setIsOpen(true)}
                    >
                        <span>{detail[0].toUpperCase() + detail.slice(1)}</span>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projectdetails
