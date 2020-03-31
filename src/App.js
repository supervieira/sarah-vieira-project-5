import React, { Component } from 'react';
import './index.css'
import firebase from './firebase';

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
      currentPet: {
        name: '',
        age: '',
        breed: '',
        sex: '',
        species: '',
        url: '',
        photo: '',
        imgFile: '',
        imgSrc: null
      },
      petId: '',
      newPet: false
    }
  }

  // componentDidUpdate(prevProps){
  //   if (this.props.currentPet !== prevProps.currentPet) {
  //     this.updatePetsArray(this.props.currentPet);
  //   }
  // }

  // Obtaining data from Firebase
  componentDidMount(){

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

    // const dbName = firebase.database().ref('overallHealth/name')

    // dbName.on('value', (response) => {
    //   const name = response.val();

    //   this.setState({
    //     name: name,
    //   })
    // })

    // const dbPhoto = firebase.database().ref('overallHealth/photo')

    // dbPhoto.on('value', (response) => {
    //   const photo = response.val();

    //   this.setState({
    //     imgSrc: photo,
    //   })
    // })

    // const dbUrl = firebase.database().ref('overallHealth/url')

    // dbUrl.on('value', (response) => {
    //   const url = response.val();

    //   this.setState({
    //     url: url,
    //   })
    // })

    // const dbAge = firebase.database().ref('overallHealth/age')

    // dbAge.on('value', (response) => {
    //   const age = response.val();

    //   this.setState({
    //     age: age,
    //   })
    // })

    // const dbBreed = firebase.database().ref('overallHealth/breed')

    // dbBreed.on('value', (response) => {
    //   const breed = response.val();

    //   this.setState({
    //     breed: breed,
    //   })
    // })

    // const dbSex = firebase.database().ref('overallHealth/sex')

    // dbSex.on('value', (response) => {
    //   const sex = response.val();

    //   this.setState({
    //     sex: sex,
    //   })
    // })

    // const dbSpecies = firebase.database().ref('overallHealth/species')

    // dbSpecies.on('value', (response) => {
    //   const species = response.val();

    //   this.setState({
    //     species: species,
    //   })
    // })
  }

  // onSubmit event handler for Profile form submit
  submitUserInput = (e, userInput) => {
    e.preventDefault();

    console.log(this.state.newPet)

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
        }
      }, () => {
        const dbOverallHealth = firebase.database().ref('pets/' + key + '/overallHealth')
        dbOverallHealth.update(this.state.currentPet)
  
        this.updatePetsArray();
      });
    }
    
    // Updating already-existing pet information
    else{
      console.log('Updating pet information')

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
    console.log("'Add pets' button has been clicked")

    this.setState({
      currentPet: {},
      newPet: true
    }, () => {
      console.log(this.state.pets)
      console.log(this.state.newPet)
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
      }, () => {
        console.log(this.state.pets)
      })
    })
  }

  // Function to display pet information when selected on Title Screen
  selectedPet = (pet) => {
    console.log("Pet has been selected")
    console.log(pet)
    console.log(pet.name)

    this.setState({
      currentPet: pet.overallHealth,
      newPet: false,
      petId: pet.name
    }, () => {
      console.log(this.state.currentPet)
      console.log(this.state.newPet)
      console.log(this.state.petId)
    })
  }

  render(){
    return(
      <div className="App">
        <Title
          addPet={this.addPet}
          currentPet={this.state.currentPet}
          pets={this.state.pets}
          selectedPet={this.selectedPet}
        />
        <Home/>

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

        <Calendar
          petId={this.state.petId}
        />
        <Toxicity/>
        <Footer/>
      </div>
    );
  }
}

export default App;
