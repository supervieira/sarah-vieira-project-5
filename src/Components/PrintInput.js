import React from 'react';
import Dog from '../assets/dog.png';

function PrintInput(props){
    return(
        <div className="printInput">
            <div className="overallHealthPhoto">
                {
                    props.imgSrc ? 
                        // If image file is available, print image to page
                        <img className="profileImage" src={props.imgSrc} alt="Pet" />
                    :   
                        props.url ? 
                            // If image file is NOT available, but url image is available, print url image to page
                            <img className="profileImage" src={props.url} alt="Pet" />
                        :
                            // If neither image file or url photo is not available, print {Dog} image (default with empty state)
                            <img className="profileImage" src={Dog} alt="Pet"/>
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
