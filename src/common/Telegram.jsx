import React from 'react';
import img_tg from '../images/Vector.png'

const Telegram = (props) => {
    return (
        <div className={props.telegram}>
            <img src = {img_tg} className={props.Vector}/>
        </div>
    );
}

export default Telegram;