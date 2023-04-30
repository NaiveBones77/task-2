import React from 'react';
import styles from "./Balls.module.css"

const YellowBall = () => {
    return (
        <div className={styles.yellowBall}>
            <div className={styles.rectangle}/>
            <div className={styles.ellipse121}/>
        </div>
    );
}

export default YellowBall;