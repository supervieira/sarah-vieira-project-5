// Form to get user input about pet info
// This info will be sent back up to App.js so that it can be stored in state
// We will print this info to the page once stored

// LOGICAL FLOW:
// User submits form input (i.e. text input for name, etc.)
// User input is saved to LOCAL state onChange
// onSubmit, call a function to pass our user input back up to App.js

// WHAT DO WE NEED:
// Form with various text inputs and submit button (will start with 'name')
// Constructor including state to locally store user input
// Function created in App.js but called locally using props from App.js --> this function will pass locally stored information to App.js

// Because we need state, we know we are going to build a class-based component


import React, { Component } from 'react';
import firebase from '../firebase';

class OverallHealthFormName extends Component{
    constructor(){
        super();

        this.state = {
            // userInputPetInfo: [],
            userInputName: "",
            // userInputAge: 0,
            // userInputBreed: "",
        }
    }

    // getUserInput = (e) => {
    //     console.log(e.target.value)

    //     this.createInputArray(e.target.value)
        
    //     this.setState({
    //         userInputPetInfo: e.target.value
    //     })
    // }

    // createInputArray = (userInput) => {
    //     const inputArray = [];
    //     inputArray.push(userInput);
    //     console.log(inputArray);
    // }

    getUserInputName = (e) => {
        console.log(e.target.value)

        this.setState({
            userInputName: e.target.value
        })
    }

    // getUserInputAge = (e) => {
    //     console.log(e.target.value)

    //     this.setState({
    //         userInputAge: e.target.value
    //     })
    // }

    // getUserInputBreed = (e) => {
    //     console.log(e.target.value)

    //     this.setState({
    //         userInputBreed: e.target.value
    //     })
    // }

    // handleInputName = (e) => {
    //     e.preventDefault();

    //     const dbOverallHealth = firebase.database().ref('overallHealth');

    //     dbOverallHealth.update({name: this.props.name});

    //     this.setState({
    //         userInputName: ""
    //     })
    // }



    render(){
        // console.log(this.props)
        return(
            <form 
                className="overallHealthFormName wrapper"
                onSubmit={(e) => this.props.functionFromParent(e, this.state.userInputName)}
            >
                <label htmlFor="petName">Name:</label>
                <input 
                    type="text" 
                    id="petName" 
                    onChange={this.getUserInputName}
                />

                {/* <label htmlFor="petAge">Age:</label>
                <input type="text" id="petAge" onChange={this.getUserInputAge} />

                <label htmlFor="petBreed">Breed:</label>
                <input type="text" id="petBreed" onChange={this.getUserInputBreed} /> */}

                {/* <button 
                    type="submit" 
                    value="submit" 
                    onClick={(e) => this.props.functionFromParent(e,this.state.userInput)}
                >
                    Update
                </button> */}
            </form>
        )
    }
}

export default OverallHealthFormName;