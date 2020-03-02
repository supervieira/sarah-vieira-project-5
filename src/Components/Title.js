import React, { Component } from 'react';
import Marley from '../assets/marley.jpeg';
import Penny from '../assets/penny.JPG';
import Brooks from '../assets/brooks.jpg';

class Title extends Component{
    render(){
        return(
            <div className="titleScreen">
                <h1>Fetch</h1>

                <div className="titleScreenCenter">
                    <h2>your pets</h2>

                    <div className="titleScreenPets">

                        <a className="titleScreenPetDiv" href="#home">
                            <div className="titleScreenPetImage">
                                <img className="profileImage" src={this.props.imgSrc} alt="Pet" />
                            </div>
                            <p className="titleScreenPetText">{this.props.name}</p>
                        </a>

                        <a className="titleScreenPetDiv" href="#home">
                            <div className="titleScreenPetImage">
                                <img src={Penny} alt="" />
                            </div>
                            <p className="titleScreenPetText">Penny</p>
                        </a>

                        <a className="titleScreenPetDiv" href="#home">
                            <div className="titleScreenPetImage">
                                <img src={Brooks} alt="" />
                            </div>
                            <p className="titleScreenPetText">Brooks</p>
                        </a>

                    </div>

                    <p className="titleScreenManagePets">manage pets</p>

                </div>

            </div>
        )
    }
}

export default Title;