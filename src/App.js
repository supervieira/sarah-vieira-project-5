import React, { Component } from 'react';
import './index.css'
import firebase from './firebase';

// import OverallHealth from './Components/OverallHealth';
import Calendar from './Components/Calendar';
import Home from './Components/Home';

import OverallHealthFormName from './Components/OverallHealthFormName';
import OverallHealthFormPhoto from './Components/OverallHealthFormPhoto';
import OverallHealthFormAge from './Components/OverallHealthFormAge';
import OverallHealthFormBreed from './Components/OverallHealthFormBreed';
import OverallHealthFormSex from './Components/OverallHealthFormSex';

import PrintInput from './Components/PrintInput';

// Can we create a separate js file that holds our image imports?
import Marley from './assets/marley.jpeg';
import Penny from './assets/penny.JPG';
import Brooks from './assets/brooks.jpg';
import OverallHealthForm from './Components/OverallHealthFormName';


class App extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      photo:'',
      age: '',
      breed: '',
      sex: ''
    }
  }

  // ---------------------------------------------------------
  // These functions save user input to App.js state and update firebase upon submit:

  submitUserInputName = (e, userInput) => {
    e.preventDefault();

    this.setState({
      name: userInput
    }, () => {
      console.log(this.state.name)

      // Trying to push data to firebase on submit
      const dbName = firebase.database().ref('overallHealth')
      dbName.update({name: this.state.name})
    })
  }

  submitUserInputPhoto = (e, userInput) => {
    e.preventDefault();

    this.setState({
      photo: userInput
    }, () => {
      console.log(this.state.photo)

      // Trying to push data to firebase on submit
      const dbPhoto = firebase.database().ref('overallHealth')
      dbPhoto.update({photo: this.state.photo})
    })
  }

  submitUserInputAge = (e, userInput) => {
    e.preventDefault();

    this.setState({
      age: userInput
    }, () => {
        console.log(this.state.age)

        // Trying to push data to firebase on submit
        const dbAge = firebase.database().ref('overallHealth')
        dbAge.update({age: this.state.age})
    })
  }

  submitUserInputBreed = (e, userInput) => {
    e.preventDefault();

    this.setState({
      breed: userInput
    }, () => {
        console.log(this.state.breed)

        // Trying to push data to firebase on submit
        const dbBreed = firebase.database().ref('overallHealth')
        dbBreed.update({breed: this.state.breed})
    })
  }

  submitUserInputSex = (e, userInput) => {
    e.preventDefault();

    this.setState({
      sex: userInput
    }, () => {
      console.log(this.state.sex)

      // Trying to push data to firebase on submit
      const dbSex = firebase.database().ref('overallHealth')
      dbSex.update({sex: this.state.sex})
    })
  }

  // ---------------------------------------------------------


  render(){
    return(
      <div className="App">

        <div className="titleScreen">
          <h1>Fetch</h1>

          <div className="titleScreenCenter">
            <h2>your pets</h2>

            <div className="titleScreenPets">
              <div className="titleScreenPetDiv">
                <div className="titleScreenPetImage">
                  <img src={Marley} alt="" />
                </div>
                <p className="titleScreenPetText">Marley</p>
              </div>

              <div className="titleScreenPetDiv">
                <div className="titleScreenPetImage">
                  <img src={Penny} alt="" />
                </div>
                <p className="titleScreenPetText">Penny</p>
              </div>

              <div className="titleScreenPetDiv">
                <div className="titleScreenPetImage">
                  <img src={Brooks} alt="" />
                </div>
                <p className="titleScreenPetText">Brooks</p>
              </div>
            </div>

            <p className="titleScreenManagePets">manage pets</p>
          </div>
        </div>

        <Home/>

        {/* <OverallHealth/> */}

        <OverallHealthFormName
          functionFromParent = {this.submitUserInputName}
        />

        <OverallHealthFormPhoto
          functionFromParent={this.submitUserInputPhoto}
        />

        <OverallHealthFormAge
          functionFromParent={this.submitUserInputAge}
        />

        <OverallHealthFormBreed
          functionFromParent={this.submitUserInputBreed}
        />

        <OverallHealthFormSex
          functionFromParent={this.submitUserInputSex}
        />

        <PrintInput
          name = {this.state.name}
          photo = {this.state.photo}
          age = {this.state.age}
          breed = {this.state.breed}
          sex = {this.state.sex}
        />

        <Calendar/>
      </div>
    );
  }
}

export default App;
