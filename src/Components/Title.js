// Consider Flickity js library for title screen

import React, { Component } from 'react';
import Penny from '../assets/penny.JPG';
import Brooks from '../assets/brooks.jpg';
import Add from '../assets/add.png';


class Title extends Component{
    constructor(){
        super();

        this.state = {
            showRemove: false
        }
    }

    // Function to make delete button appear on pet image
    managePets = () => {        
        if(!this.state.showRemove){
            this.setState({
                showRemove: true
            })
        }
        else{
            this.setState({
                showRemove: false
            })
        }
    }

    render(){
        return(
            <div className="titleScreen" id="title">
                <h1>Fetch</h1>
    
                <div className="titleScreenCenter">
                    <h2>your pets</h2>
    
                    <ul className="titleScreenPets">
                        <li>
                            <a className="titleScreenPetDiv" href="#overallHealth" onClick={this.props.addPet}>
                                <div className="titleScreenPetImage">
                                    <img className="profileImage" src={Add} alt="Pet" />
                                </div>
                                <p className="titleScreenPetText">Add pet</p>
                            </a>
                        </li>
    
                        {
                            this.props.pets.map((pet)=>{
                                return(
                                    <li key={pet.name}>
                                        <a className="titleScreenPetDiv" href="#home" onClick={()=>{this.props.selectedPet(pet)}}>
                                            <div className="titleScreenPetImage">
                                                <img className="profileImage" src={pet.overallHealth.url} alt="Pet" />
                                            </div>
                                            <p className="titleScreenPetText">{pet.overallHealth.name}</p>
                                        </a> 
                                        {
                                            this.state.showRemove ?
                                                <p className="deletePet" onClick={() => {this.props.deletePet(pet)}}>x</p>
                                            :
                                                null
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                    {
                        !this.state.showRemove ?
                            <p className="titleScreenManagePets" onClick={this.managePets}>manage pets</p>
                        :
                            <p className="titleScreenManagePets" onClick={this.managePets}>save changes</p>
                    }
    
                </div>
    
            </div>
        )
    }
}

export default Title;