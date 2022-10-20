import {useState} from "react";

const useSky = () => {
    const [stars, setStars] = useState([]);

    const changeSky = () => {
        const newStars = stars;

        const star = {

        }

        newStars.push(star)

        setStars([...newStars]);
    }
    return({
        stars,
        changeSky,
    });
}

export default useSky;