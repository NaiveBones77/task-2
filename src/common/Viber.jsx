import React from 'react';
import img_viber from '../images/phone.png'

const Viber = (props) => {
    return (
        <div className={props.viber}>
            <img src = {img_viber} className={props.phone}/>
        </div>
    );
}

export default Viber;