// Consider Flickity js library for title screen

import React from 'react';
import Penny from '../assets/penny.JPG';
import Brooks from '../assets/brooks.jpg';
import Add from '../assets/add.png';


function Title(props){

    const comingSoonButton = (e) => {
        alert("This functionality is not yet available - please check back soon!")
    }

    return(
        <div className="titleScreen" id="title">
            <h1>Fetch</h1>

            <div className="titleScreenCenter">
                <h2>your pets</h2>

                <ul className="titleScreenPets">
                    <li>
                        <a className="titleScreenPetDiv" href="#overallHealth" onClick={props.addPet}>
                            <div className="titleScreenPetImage">
                                <img className="profileImage" src={Add} alt="Pet" />
                            </div>
                            <p className="titleScreenPetText">Add pet</p>
                        </a>
                    </li>

                    {
                        props.pets.map((pet)=>{
                            return(
                                <li>
                                    <a className="titleScreenPetDiv" href="#home" onClick={()=>{props.selectedPet(pet)}}>
                                        <div className="titleScreenPetImage">
                                            <img className="profileImage" src={pet.overallHealth.url} alt="Pet" />
                                        </div>
                                        <p className="titleScreenPetText">{pet.overallHealth.name}</p>
                                    </a> 
                                </li>
                            )
                        })
                    }
                </ul>

                <p className="titleScreenManagePets" onClick={comingSoonButton}>manage pets</p>

            </div>

        </div>
    )
}

export default Title;