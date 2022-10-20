import React from "react";
import StarView from "./StarView";
import useStar from "./useStar";


const Star = () => {
    return(
        <StarView {...useStar()}/>
    );
}

export default Star;