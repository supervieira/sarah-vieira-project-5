import React from 'react';
import Dog from '../assets/dog.png';

function PrintInput(props){
    return(
        <div className="printInput">
            <div className="overallHealthPhoto">
                {
                    props.currentPet.imgSrc ? 
                        // If image file is available, print image to page
                        <img className="profileImage" src={props.currentPet.imgSrc} alt="Pet" />
                    :   
                        props.currentPet.url ? 
                            // If image file is NOT available, but url image is available, print url image to page
                            <img className="profileImage" src={props.currentPet.url} alt="Pet" />
                        :
                            // If neither image file or url photo is not available, print {Dog} image (default with empty state)
                            <img className="profileImage" src={Dog} alt="Pet"/>
                }
            </div>
            <div>
                <p className="name">{props.currentPet.name}</p>
                <p><span>Age: </span>{props.currentPet.age}</p>
                <p><span>Species: </span>{props.currentPet.species}</p>
                <p><span>Breed: </span>{props.currentPet.breed}</p>
                <p><span>Sex: </span>{props.currentPet.sex}</p>
            </div>
        </div>
    )
}

export default PrintInput;
