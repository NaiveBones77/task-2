import React from 'react';
import styles from './MainMonile.module.css'
import Frame105 from "./Frames/Frame105";
import Frame103 from "./Frames/Frame103";
import Frame102 from "./Frames/Frame102";
import Frame104 from "./Frames/Frame104";
import Background from "./bg/Background";

const MainMobile = (props) => {
    return (
        <div className={styles.main}>
            <Frame105/>
            <Frame103/>
            <Frame102/>
            <Frame104/>
            <div className={styles.t1}>
                с WELBEX
            </div>
            <div className={styles.t2}>
                Зарабатывайте больше
            </div>
            <div className={styles.t3}>
                Развиваем и контролируем продажи за вас
            </div>
            <div className={styles.t4}>
                Вместе с <span>бесплатной консультацией</span> мы дарим:
            </div>
            <Background/>
        </div>
    );
}

export default MainMobile;