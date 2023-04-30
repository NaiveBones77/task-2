import React from 'react';
import img_whatsapp from '../images/whatsapp.png'

const Whatsapp = (props) => {
    return (
        <div className={props.whatsapp}>
            <img src = {img_whatsapp} className={props.whatsappImg}/>
        </div>
    );
}

export default Whatsapp;