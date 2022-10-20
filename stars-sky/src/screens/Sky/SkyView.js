import React, {Fragment} from "react";
import {Moon} from "../Moon";
import { Star } from "../Star";
import styles from "./Sky.module.scss";

const SkyView = (props) => {
    const {stars, changeSky} = props;
    return(
        <div className={styles._} onClick={() => changeSky()}>
            <Moon />
            {stars.map((star, index) =>(
                <Star key={"star_" + index}/>
            ))}
            <Star />
        </div>
    );
}

export default SkyView;