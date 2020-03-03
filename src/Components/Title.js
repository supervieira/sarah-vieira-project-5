import React, { Component } from 'react';
// import Marley from '../assets/marley.jpeg';
import Penny from '../assets/penny.JPG';
import Brooks from '../assets/brooks.jpg';
import Add from '../assets/add.png';


class Title extends Component{
    render(){
        return(
            <div className="titleScreen">
                <h1>Fetch</h1>

                <div className="titleScreenCenter">
                    <h2>your pets</h2>

                    <ul className="titleScreenPets">

                        <li>
                            {                          
                                this.props.imgSrc ?
                                    // this.props.name != "" ?
                                        <a className="titleScreenPetDiv" href="#home">
                                            <div className="titleScreenPetImage">
                                                <img className="profileImage" src={this.props.imgSrc} alt="Pet" />
                                            </div>
                                            <p className="titleScreenPetText">{this.props.name}</p>
                                        </a>                               
                                :
                                    <a className="titleScreenPetDiv" href="#home">
                                        <div className="titleScreenPetImage">
                                            <img className="profileImage" src={Add} alt="Pet" />
                                        </div>
                                        <p className="titleScreenPetText">Add pet</p>
                                    </a>
                            }
                        </li>

                        {/* Currently these two pets are hard-coded for styling/demostration purposes */}
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
                    </ul>

                    <p className="titleScreenManagePets">manage pets</p>

                </div>

            </div>
        )
    }
}

export default Title;