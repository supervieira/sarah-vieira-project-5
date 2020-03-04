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
      name: '',
      age: '',
      breed: '',
      sex: '',
      species: '',
      url: '',
      photo:'',
      imgFile: '',
      imgSrc: null
    }
  }

  // Obtaining data from Firebase
  componentDidMount(){
    const dbName = firebase.database().ref('overallHealth/name')

    dbName.on('value', (response) => {
      const name = response.val();

      this.setState({
        name: name,
      })
    })

    const dbPhoto = firebase.database().ref('overallHealth/photo')

    dbPhoto.on('value', (response) => {
      const photo = response.val();

      this.setState({
        imgSrc: photo,
      })
    })

    const dbUrl = firebase.database().ref('overallHealth/url')

    dbUrl.on('value', (response) => {
      const url = response.val();

      this.setState({
        url: url,
      })
    })

    const dbAge = firebase.database().ref('overallHealth/age')

    dbAge.on('value', (response) => {
      const age = response.val();

      this.setState({
        age: age,
      })
    })

    const dbBreed = firebase.database().ref('overallHealth/breed')

    dbBreed.on('value', (response) => {
      const breed = response.val();

      this.setState({
        breed: breed,
      })
    })

    const dbSex = firebase.database().ref('overallHealth/sex')

    dbSex.on('value', (response) => {
      const sex = response.val();

      this.setState({
        sex: sex,
      })
    })

    const dbSpecies = firebase.database().ref('overallHealth/species')

    dbSpecies.on('value', (response) => {
      const species = response.val();

      this.setState({
        species: species,
      })
    })
  }

  // onSubmit event handler for Profile form submit
  submitUserInput = (e, userInput) => {
    e.preventDefault();

    this.setState({
      name: userInput.userInputName,
      age: userInput.userInputAge,
      breed: userInput.userInputBreed,
      sex: userInput.userInputSex,
      species: userInput.userInputSpecies,
      url: userInput.userInputUrl,
      photo: userInput.userInputPhoto,
      imgFile: userInput.imgFile,
      imgSrc: userInput.imgSrc
    }, () => {
      const dbOverallHealth = firebase.database().ref('overallHealth')

      dbOverallHealth.update({ name: this.state.name })
      dbOverallHealth.update({ photo: this.state.imgSrc })
      dbOverallHealth.update({ age: this.state.age })
      dbOverallHealth.update({ breed: this.state.breed })
      dbOverallHealth.update({ sex: this.state.sex })
      dbOverallHealth.update({ species: this.state.species })
      dbOverallHealth.update({ url: this.state.url })
    });
  }

  render(){
    return(
      <div className="App">
        <Title
          name={this.state.name}
          imgSrc={this.state.imgSrc}
          url={this.state.url}
        />
        <Home/>

        <div className="OverallHealth" id="overallHealth">
          <h2>Profile</h2>

          <div className="overallHealthFlex wrapper">
            <PrintInput
              name = {this.state.name}
              photo = {this.state.photo}
              age = {this.state.age}
              breed = {this.state.breed}
              sex = {this.state.sex}
              species = {this.state.species}
              imgSrc = {this.state.imgSrc}
              url = {this.state.url}
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

        <Calendar/>
        <Toxicity/>
        <Footer/>
      </div>
    );
  }
}

export default App;
