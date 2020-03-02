import React, { Component } from 'react';
import './index.css'
import firebase from './firebase';

import Title from './Components/Title';
import Calendar from './Components/Calendar';
import Home from './Components/Home';

import OverallHealthFormName from './Components/OverallHealthFormName';
import OverallHealthFormPhoto from './Components/OverallHealthFormPhoto';
import OverallHealthFormAge from './Components/OverallHealthFormAge';
import OverallHealthFormBreed from './Components/OverallHealthFormBreed';
import OverallHealthFormSex from './Components/OverallHealthFormSex';

import PrintInput from './Components/PrintInput';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faTrashAlt)


class App extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      photo:'',
      age: '',
      breed: '',
      sex: '',
      imgFile: '',
      imgSrc: null
    }
  }

  componentDidMount(){
    // Trying to push data to firebase on submit
    // const dbName = firebase.database().ref('overallHealth')
    // dbName.update({ name: this.state.name })
    // Did not work...

    // ----------------------------

    // Update firebase with userInput
    // const dbOverallHealth = firebase.database().ref('overallHealth')
    // dbOverallHealth.update({name: this.state.name})

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

    // THIS WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const dbPhoto = firebase.database().ref('overallHealth/photo')

    dbPhoto.on('value', (response) => {
      // Recall: response = data received from Firebase at written reference point
      console.log(response.val())

      const photo = response.val();

      this.setState({
        imgSrc: photo,
      }, () => {
        console.log(this.state.imgSrc)
      })
    })

    const dbAge = firebase.database().ref('overallHealth/age')

    dbAge.on('value', (response) => {
      console.log(response.val())

      const age = response.val();

      this.setState({
        age: age,
      }, () => {
        console.log(this.state.age)
      })
    })

    const dbBreed = firebase.database().ref('overallHealth/breed')

    dbBreed.on('value', (response) => {
      console.log(response.val())

      const breed = response.val();

      this.setState({
        breed: breed,
      }, () => {
        console.log(this.state.breed)
      })
    })

    const dbSex = firebase.database().ref('overallHealth/sex')

    dbSex.on('value', (response) => {
      console.log(response.val())

      const sex = response.val();

      this.setState({
        sex: sex,
      }, () => {
        console.log(this.state.sex)
      })
    })
  }

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

      const dbOverallHealth = firebase.database().ref('overallHealth')
      dbOverallHealth.update({name: userInput})
    })

    // Update firebase with userInput

    // Save firebase data into state:
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
      imgFile: e.target.files[0],
      imgSrc: URL.createObjectURL(e.target.files[0]),
    }, () => {
      const dbPhoto = firebase.database().ref('overallHealth')
      dbPhoto.update({photo: this.state.imgSrc})
    });

    URL.revokeObjectURL(e.target.files[0]); //to avoid memory issues

    // this.setState({
    //   photo: userInput
    // }, () => {
    //   console.log(this.state.photo)

    //   // Trying to push data to firebase on submit
    // })
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
        <Title
          name={this.state.name}
          imgSrc={this.state.imgSrc}
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
              imgSrc = {this.state.imgSrc}
            />

            <div className="OverallHealthUpdate">
              <h3>Update Information:</h3>
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
          
          <div class="wrapper">
            <button className="back">
              <a href="#home">Back</a>
            </button>
          </div>
        </div>

        <Calendar/>
      </div>
    );
  }
}

export default App;
