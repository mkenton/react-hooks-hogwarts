import React, {useState} from "react";
import HogDetails from "./HogDetails"

function HogTitles({hogs}) {
    const [details, setDetails] = useState(false)
    function handleNameClick() {
        setDetails(!details)
    }
    
    const hogsList = hogs.map((hog) => {
        return (
            <span key={hog.name}>
                <h2 onClick={handleNameClick}>{hog.name}</h2>
                {details ? <HogDetails hog={hog}/> : ""}
                <img className="pig" src={hog.image} alt = "prize pig"/>
            </span>
        )
    })
    return (
        <div>
            {hogsList}
        </div>
    )
}
export default HogTitles;