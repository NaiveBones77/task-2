import React from 'react';
import styles from "./Background.module.css"
import BigRedBall from "./balls/BigRedBall";
import SmallRedBall from "./balls/SmallRedBall";
import PurpleBall from "./balls/PurpleBall";
import YellowBall from "./balls/YellowBall";
import RedLight from "./lights/RedLight";
import YellowLight from "./lights/YellowLight";
import PurpleLight from "./lights/PurpleLight";
import Glass from "./Glass";
import Noise from "./Noise";

const Background = () => {
    return (
        <div className={styles.bg}>
            <BigRedBall/>
            <SmallRedBall/>
            <PurpleBall/>
            <YellowBall/>
            <RedLight/>
            <YellowLight/>
            <PurpleLight/>
            <Glass/>
            <Noise/>
        </div>
    );
}

export default Background;