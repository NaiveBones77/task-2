import React from 'react';
import Button from "./btn/Button";
import PurpleBall from "./balls/PurpleBall";
import BigRedBall from "./balls/BigRedBall";
import SmallRedBall from "./balls/SmallRedBall";
import RedLight from "./lights/RedLight";
import PurpleLight from "./lights/PurpleLight";
import Texts from "./Texts/Texts";

const Main = (props) =>{
    return (
        <div>
            <Button/>
            <PurpleBall/>
            <BigRedBall/>
            <SmallRedBall/>
            <RedLight/>
            <PurpleLight/>
            <Texts/>
        </div>
    );
}

export default Main;