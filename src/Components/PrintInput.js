import React from 'react';

function PrintInput(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Breed: {props.breed}</p>
        </div>
    )
}

export default PrintInput;