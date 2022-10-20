import React, {Fragment} from "react";
import {Moon} from "../Moon";
import { Star } from "../Star";
import styles from "./Sky.module.scss";

const SkyView = (props) => {
    const {} = props;
    return(
        <div className={styles._}>
            <Moon />
            <Star />
        </div>
    );
}

export default SkyView;