import {useState, useEffect} from "react";

const useSky = () => {
    const [stars, setStars] = useState([]);

    useEffect(() =>{
        return() => {
            setStars([]);
        }
    }, []);

    useEffect(() =>{
        const newStars = stars;
        const countStars = getRandomInt(0, 100);
        for (let i= 0; i < countStars; i++) {
            const star = {
                left: getRandomInt(0, 100) + "%",
                top: getRandomInt(0, 100) + "%",
    
            }

            newStars.push(star);
            
        }
        setStars([...newStars]);
    }, []);

    const changeSky = (event) => {
        const newStars = stars;

        const star = {
            left: event.pageX + "px",
            top: event.pageY + "px",

        }

        newStars.push(star);

        setStars([...newStars]);
    }
    return({
        stars,
        changeSky,
    });
}

export default useSky;