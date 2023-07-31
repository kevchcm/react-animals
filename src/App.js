import {useState} from "react";

import './index.css'

import AnimalShow from "./AnimalShow";

function getAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getAnimal()])
    }

    return (
        <div className="p-20">
            <button className="border border-gray-300 p-2 rounded-lg" onClick={handleClick}>
                Add Animal
            </button>

            <div className="flex flex-wrap">
                {
                    animals.map((animal, index)=>{
                        return (
                            <AnimalShow type={animal} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App