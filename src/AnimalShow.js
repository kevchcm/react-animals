import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
import {useState} from "react";

const svgMap = { bird, cat, cow, dog, gator, horse }

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        if(clicks < 7){
            setClicks(clicks + 1)
        }
    }

    return (
        <div className="relative m-4 p-3 drop-shadow border border-gray-100">
            <img
                onClick={handleClick}
                className="h-[200px]"
                src={svgMap[type]}
                alt="animal"/>
            <img
                className="absolute bottom-[10%] right-[10%] z-10"
                style={{
                    width: 10 + 10 * clicks + 'px'
                }}
                src={heart} alt="heart"/>
        </div>
    )

}

export default AnimalShow