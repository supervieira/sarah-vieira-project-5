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

  // componentDidMount(){
    // Trying to push data to firebase on submit
    // const dbName = firebase.database().ref('overallHealth')
    // dbName.update({ name: this.state.name })
    // Did not work...

    // ----------------------------

    // // Update firebase with userInput
    // const dbOverallHealth = firebase.database().ref('overallHealth')
    // dbOverallHealth.update({name: this.state.name})

    // // Save firebase data into state:
    // const dbName = firebase.database().ref('overallHealth/name')

    // dbName.on('value', (response) => {
    //   console.log(response.val())

    //   const name = response.val();

    //   this.setState({
    //     name: name,
    //   }, () => {
    //     console.log(this.state.name)
    //   })
    // })

    // Also did not work...
  // }

  // ---------------------------------------------------------
  // These functions save user input to App.js state and update firebase upon submit:

  // When name is updated by user...
  submitUserInputName = (e, userInput) => {
    // Prevent default
    e.preventDefault();

    this.setState({
      name: userInput
    }, () => {
      console.log(this.state.name)
    })

    // Update firebase with userInput
    const dbOverallHealth = firebase.database().ref('overallHealth')
    dbOverallHealth.update({name: userInput})

    // Save firebase data into state:
    const dbName = firebase.database().ref('overallHealth/name')

    dbName.on('value', (response) => {
      console.log(response.val())

      const name = response.val();

      this.setState({
        name: name,
      }, () => {
        console.log(this.state.name)
      })
    })

    // Problem: DOES NOT SAVE DATA ON PAGE AFTER REFRESH :(

    // Save firebase data into state
    // this.setState({
    //   name: userInput
    // }, () => {
    //   console.log(this.state.name)
    // })

    // const dbOverallHealth = firebase.database().ref('overallHealth')
    // dbOverallHealth.update({ name: userInput })
    
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

        <div className="OverallHealth">
          <h2>Overall Health</h2>
          
          
          <PrintInput
            name = {this.state.name}
            photo = {this.state.photo}
            age = {this.state.age}
            breed = {this.state.breed}
            sex = {this.state.sex}
          />

          <div className="OverallHealthUpdate">
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
          </div>
        </div>


        <Calendar/>
      </div>
    );
  }
}

export default App;
