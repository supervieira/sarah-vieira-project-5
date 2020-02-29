import React, { Component } from 'react';
import './index.css'
// import firebase from './firebase';

// import OverallHealth from './Components/OverallHealth';
import Calendar from './Components/Calendar';
import Home from './Components/Home';
import OverallHealthFormName from './Components/OverallHealthFormName';
import OverallHealthFormAge from './Components/OverallHealthFormAge';
import OverallHealthFormBreed from './Components/OverallHealthFormBreed';
import PrintInput from './Components/PrintInput';

// Can we create a separate js file that holds our image imports?
import Marley from './assets/marley.jpeg';
import Penny from './assets/penny.JPG';
import Brooks from './assets/brooks.jpg';


class App extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      age: '',
      breed: ''
    }
  }

  submitUserInput = (e, userInput) => {
    e.preventDefault();

    this.setState({
      name: userInput
    })
    // , () => {console.log(userInput)})

    // Trying to push data to firebase
    // const dbOverallHealth = firebase.database().ref('overallHealth')
    // dbOverallHealth.push(userInput)
  }


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

        <OverallHealthFormName
          functionFromParent = {this.submitUserInput}
        />

        <OverallHealthFormAge
          // functionFromParent={this.submitUserInput}
        />

        <OverallHealthFormBreed
          // functionFromParent={this.submitUserInput}
        />

        <PrintInput
          name = {this.state.name}
          age = {this.state.age}
          breed = {this.state.breed}
        />

        {/* <OverallHealth/> */}
        <Calendar/>
      </div>
    );
  }
}

export default App;
