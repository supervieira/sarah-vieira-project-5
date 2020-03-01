import React from 'react';

function PrintInput(props){
    return(
        // How to keep info printed on page after refresh?
        <div className= "wrapper">
            <p>Name: {props.name}</p>
            <div>
                <img src="{props.photo}" alt="Photo of pet"/>
            </div>
            <p>Age: {props.age}</p>
            <p>Breed: {props.breed}</p>
            <p>Sex: {props.sex}</p>
        </div>
    )
}

export default PrintInput;
