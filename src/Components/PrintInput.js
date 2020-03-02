import React from 'react';

function PrintInput(props){
    return(
        // How to keep info printed on page after refresh?
        <div className="printInput">
            <div className="overallHealthPhoto">
                <img className= "profileImage" src={props.imgSrc} alt="Pet"/>
            </div>
            <div>
                <p><span>Name: </span>{props.name}</p>
                <p><span>Age: </span>{props.age}</p>
                <p><span>Breed: </span>{props.breed}</p>
                <p><span>Sex: </span>{props.sex}</p>
            </div>
        </div>
    )
}

export default PrintInput;
