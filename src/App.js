import React, { Component } from 'react';
import './index.css'
import firebase from './firebase';

import Login from './Components/Login'
import Title from './Components/Title';
import Home from './Components/Home';
import ProfileForm from './Components/ProfileForm';
import PrintInput from './Components/PrintInput';
import Calendar from './Components/Calendar';
import Toxicity from './Components/Toxicity';
import Footer from './Components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faTrashAlt)



class App extends Component {
  constructor(){
    super();

    this.state = {
      pets: [],
      currentPet: {},
      currentPetInfo: {},
      petId: '',
      newPet: false,
      user: {}
    }
  }

  // Firebase authentication
  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user: null})
      }
    })
  }

  // Obtaining data from Firebase
  componentDidMount(){
    this.authListener();
    this.updatePetsArray();
  }

  // onSubmit event handler for Profile form submit
  submitUserInput = (e, userInput) => {
    e.preventDefault();


    // Adding an entirely new pet
    if(this.state.newPet){
      const dbPets = firebase.database().ref('pets')
      const key = dbPets.push().getKey()
  
      const dbCurrentPet = firebase.database().ref('pets/' + key)
  
      dbCurrentPet.update({
        overallHealth: '',
        calendar: '',
        diet: ''
      });
  
      this.setState({
        currentPet:{
          name: userInput.userInputName,
          age: userInput.userInputAge,
          breed: userInput.userInputBreed,
          sex: userInput.userInputSex,
          species: userInput.userInputSpecies,
          url: userInput.userInputUrl,
          photo: userInput.userInputPhoto,
          imgFile: userInput.imgFile,
          imgSrc: userInput.imgSrc
        },
        petId: key,
        currentPetInfo: {
          calendar: {}
        }
      }, () => {
        const dbOverallHealth = firebase.database().ref('pets/' + key + '/overallHealth')
        dbOverallHealth.update(this.state.currentPet)
  
        this.updatePetsArray();
      });
    }
    
    // Updating already-existing pet information
    else{

      this.setState({
        currentPet: {
          name: userInput.userInputName,
          age: userInput.userInputAge,
          breed: userInput.userInputBreed,
          sex: userInput.userInputSex,
          species: userInput.userInputSpecies,
          url: userInput.userInputUrl,
          photo: userInput.userInputPhoto,
          imgFile: userInput.imgFile,
          imgSrc: userInput.imgSrc
        }
      }, () => {
        const dbCurrentPet = firebase.database().ref('pets/' + this.state.petId + '/overallHealth')
        dbCurrentPet.update(this.state.currentPet)

        this.updatePetsArray();
      });
    }
  }

  // Event handler for "Add Pets" button on Title page
  addPet = () => {    

    this.setState({
      currentPet: {},
      currenPetInfo: [],
      petId: '',
      newPet: true
    });
  }

  // Function to update pets array once state has been updated
  updatePetsArray = () => {
    const dbPets = firebase.database().ref('pets')

    dbPets.on('value', (response) => {
      const pets = response.val();

      const petsArr = Object.keys(pets).map((name) => {
        return {
          name: name,
          ...pets[name]
        }
      });

      this.setState({
        pets: petsArr,
      })
    })
  }

  // Function to display pet information when selected on Title Screen
  selectedPet = (pet) => {
    this.setState({
      currentPet: pet.overallHealth,
      newPet: false,
      petId: pet.name,
      currentPetInfo: pet
    })
  }

  // Function to delete pet
  deletePet = (pet) => {
    const dbPetToRemove = firebase.database().ref('pets/');
    dbPetToRemove.child(pet.name).remove();

    this.updatePetsArray();

    if(this.state.petId === pet.name){
      this.setState({
        currentPet: {},
        currenPetInfo: [],
        petId: '',
        newPet: false
      })
    }
  }

  render(){
    return(
      <div className="App">
        {
          this.state.user ?
            <Title
              addPet={this.addPet}
              currentPet={this.state.currentPet}
              pets={this.state.pets}
              selectedPet={this.selectedPet}
              deletePet={this.deletePet}
            />
          :
            <Login/>
        }

        {/* <Title
          addPet={this.addPet}
          currentPet={this.state.currentPet}
          pets={this.state.pets}
          selectedPet={this.selectedPet}
          deletePet={this.deletePet}
        /> */}

        {
          this.state.petId !== "" ?
            <Home/>
          :
            null
        }

        {
          this.state.newPet || this.state.petId !== "" ?
            <div className="OverallHealth" id="overallHealth">
              <h2>Profile</h2>

              <div className="overallHealthFlex wrapper">
                <PrintInput
                  currentPet={this.state.currentPet}
                />

                <ProfileForm
                  functionFromParent={this.submitUserInput}
                />
              </div>     
              
              <div className="wrapper">
                <button className="back">
                  <a href="#home">Back</a>
                </button>
              </div>
            </div>
          :
            null
        }

        {
          this.state.petId !== "" ?
            <Calendar
              petInfo={this.state.currentPetInfo}
            />
          : null
        }

        {
          this.state.petId !== "" ?
            <Toxicity/>
          :
            null
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
