import React, {Fragment} from "react";
import styles from "./Star.module.scss";


const StarView = (props) => {
    const {} = props;
    return(
        <div className={styles._}>
            <IconStar  fill="#ffeb3b" height={72} width={72}/>
        </div>);
}

export default StarView;