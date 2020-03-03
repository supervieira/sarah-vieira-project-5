import React from 'react';
// import Cat from '../assets/cat.png';
import Dog from '../assets/dog.png';

function PrintInput(props){
    return(
        // How to keep info printed on page after refresh?
        <div className="printInput">
            <div className="overallHealthPhoto">
                {
                    props.imgSrc ? 
                    <img className="profileImage" src={props.imgSrc} alt="Pet" />
                    :
                    <img className= "profileImage" src={Dog} alt="Pet"/>
                }
            </div>
            <div>
                <p className="name">{props.name}</p>
                <p><span>Age: </span>{props.age}</p>
                <p><span>Species: </span>{props.species}</p>
                <p><span>Breed: </span>{props.breed}</p>
                <p><span>Sex: </span>{props.sex}</p>
            </div>
        </div>
    )
}

export default PrintInput;
