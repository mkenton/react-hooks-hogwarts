import React from "react";


function HogDetails({hog}) {

    return (

    <ul>
        <li>Specialty: {hog.specialty}</li>
        <li>{hog.greased? "Greased!" : "Not Greased"} </li>
        <li>Weight: {hog.weight}</li>

    </ul>
    )
}

export default HogDetails;