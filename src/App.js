import React, { Component } from 'react';
import './index.css'
import firebase from './firebase';
import { storage } from './firebase';

import Title from './Components/Title';
import Home from './Components/Home';
import ProfileForm from './Components/ProfileForm';
import PrintInput from './Components/PrintInput';
import Calendar from './Components/Calendar';
import Toxicity from './Components/Toxicity';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faTrashAlt)


class App extends Component {
  constructor(){
    super();

    this.state = {
      pets: [],
      name: '',
      photo:'',
      age: '',
      breed: '',
      sex: '',
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
  }

  // onSubmit event handler for Profile form submit
  submitUserInput = (e, userInput) => {
    e.preventDefault();

    this.setState({
      name: userInput.userInputName,
      age: userInput.userInputAge,
      breed: userInput.userInputBreed,
      sex: userInput.userInputSex,
      photo: userInput.photo,
      imgFile: userInput.imgFile,
      imgSrc: userInput.imgSrc
    }, () => {
      console.log(this.state.photo)
      console.log(this.state.imgSrc)
      console.log(this.state.imgFile)

      const dbOverallHealth = firebase.database().ref('overallHealth')

      dbOverallHealth.update({ name: this.state.name })
      dbOverallHealth.update({ photo: this.state.imgSrc })
      dbOverallHealth.update({ age: this.state.age })
      dbOverallHealth.update({ breed: this.state.breed })
      dbOverallHealth.update({ sex: this.state.sex })




      // Working with Firebase Cloud Storage
      // const storage = firebase.storage();
      // const storageRef = storage.ref();

      // let file = this.state.imgSrc
      // storageRef.put(file).then(function (snapshot) {
      //   console.log('Uploaded a blob or file!');
      // });

      // let message = 'This is my message.';
      // ref.putString(message).then(function (snapshot) {
      //   console.log('Uploaded a raw string!');
      // });

      // Messing around with Firebase storage
      // const { image } = this.state;
      // const uploadTask = storage.ref(`images/${image.name}`).put(image);

      // uploadTask.on('state_changed',
      //   (snapshot) => {
      //     // Progress function
      //   },
      //   (error) => {
      //     // Error function
      //     console.log('error')
      //   },
      //   () => {
      //     // Complete function
      //     // Grabbing image from firebase storage
      //     storage.ref('image').child(image.name).getDownloadURL().then(url => {
      //       console.log(url)
      //     })

      //   });
    });

    // URL.revokeObjectURL(e.target.files[0]); //to avoid memory issues
  }

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
      </div>
    );
  }
}

export default App;
