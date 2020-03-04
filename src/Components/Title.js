import React from 'react';
import Penny from '../assets/penny.JPG';
import Brooks from '../assets/brooks.jpg';
import Add from '../assets/add.png';


function Title(props){
    return(
        <div className="titleScreen">
            <h1>Fetch</h1>

            <div className="titleScreenCenter">
                <h2>your pets</h2>

                <ul className="titleScreenPets">
                    {/* Currently these two pets are hard-coded for styling/demostration purposes. Will work on adding new pets and linking them to their own individual nodes in Firebase. */}
                    <li>
                        <a className="titleScreenPetDiv" href="#home">
                            <div className="titleScreenPetImage">
                                <img src={Penny} alt="" />
                            </div>
                            <p className="titleScreenPetText">Penny</p>
                        </a>
                    </li>

                    <li>
                        <a className="titleScreenPetDiv" href="#home">
                            <div className="titleScreenPetImage">
                                <img src={Brooks} alt="" />
                            </div>
                            <p className="titleScreenPetText">Brooks</p>
                        </a>
                    </li>
                    
                    <li>
                        {                          
                            props.imgSrc ?
                                    // If image file is available, print image to page
                                    <a className="titleScreenPetDiv" href="#home">
                                        <div className="titleScreenPetImage">
                                            <img className="profileImage" src={props.imgSrc} alt="Pet" />
                                        </div>
                                        <p className="titleScreenPetText">{props.name}</p>
                                    </a>                               
                            :
                                props.url ?
                                    // If image file is NOT available, but url image is available, print url image to page
                                    <a className="titleScreenPetDiv" href="#home">
                                        <div className="titleScreenPetImage">
                                            <img className="profileImage" src={props.url} alt="Pet" />
                                        </div>
                                        <p className="titleScreenPetText">{props.name}</p>
                                    </a> 
                                :
                                    // If neither image file or url photo is not available, print "Add Pet"
                                    <a className="titleScreenPetDiv" href="#home">
                                        <div className="titleScreenPetImage">
                                            <img className="profileImage" src={Add} alt="Pet" />
                                        </div>
                                        <p className="titleScreenPetText">Add pet</p>
                                    </a>
                        }
                    </li>
                </ul>

                <p className="titleScreenManagePets">manage pets</p>

            </div>

        </div>
    )
}

export default Title;