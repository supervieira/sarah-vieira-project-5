import React, { Component } from 'react';
import {storage} from '../firebase';

class ProfileForm extends Component{
    constructor(){
        super();

        this.state = {
            userInputPhoto: '',
            userInputName: '',
            userInputAge: '',
            userInputBreed: '',
            userInputSex: '',
            imgFile: '',
            imgSrc: null,

            // Firebase storage tutorial
            // image: null,
            // url: ''
        }

        // this.handleChange = this
        //     .handleChange
        //     .bind(this);

        // this.handleUpload = this
        //     .handleUpload
        //     .bind(this);
    }

    // Name
    getUserInputName = (e) => {
        console.log(e.target.value)

        this.setState({
            userInputName: e.target.value
        }, () => {
            console.log(this.state.userInputName)
        })
    }

    // Photo
    getUserInputPhoto = (e) => {
        console.log(e.target.value)

        this.setState({
            userInputPhoto: e.target.value,
            imgFile: e.target.files[0],
            imgSrc: URL.createObjectURL(e.target.files[0])
        }, () => {
            console.log(this.state.userInputPhoto);
            console.log(this.state.imgFile);
            console.log(this.state.imgSrc)
        })
    }

    // Using Firebase cloud storage
    // handleChange = (e) => {
    //     if(e.target.files[0]){
    //         const image = e.target.files[0]
    //         this.setState(() => ({image}));
            
    //         this.setState({
    //             userInputPhoto: e.target.value,
    //             imgFile: e.target.files[0],
    //             imgSrc: URL.createObjectURL(e.target.files[0])
    //         });
    //     }
    // }

    // Age
    getUserInputAge = (e) => {
        console.log(e.target.value)
        
        this.setState({
            userInputAge: e.target.value
        }, () => {
            console.log(this.state.userInputAge)
        })
    }

    // Breed
    getUserInputBreed = (e) => {
        console.log(e.target.value)

        this.setState({
            userInputBreed: e.target.value
        }, () => {
            console.log(this.state.userInputBreed)
        })
    }

    // Sex
    getUserInputSex = (e) => {
        this.setState({
            userInputSex: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        this.props.functionFromParent(e, this.state)
        this.setState({
            userInputPhoto: '',
            userInputName: '',
            userInputAge: '',
            userInputBreed: '',
            userInputSex: '',
            imgFile: '',
            imgSrc: null
        })
    }

    // handleUpload = (e) => {
    //     // Messing around with Firebase storage
    //     const { image } = this.state;
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image);

    //     uploadTask.on('state_changed',
    //         (snapshot) => {
    //             // Progress function
    //         },
    //         (error) => {
    //             // Error function
    //             console.log('error')
    //         },
    //         () => {
    //             // Complete function
    //             // Grabbing image from firebase storage
    //             storage.ref('image').child(image.name).getDownloadURL().then(url => {
    //                 console.log(url)
    //             })

    //         });
    // }

    render(){
        return(
            <div className="OverallHealthUpdate">

                <h3>Update Pet Information:</h3>

                <form 
                    action="submit"
                    className="profileForm"
                    onSubmit={this.handleFormSubmit}
                >
                    {/* Name */}
                    <div className="overallHealthFormName">
                        <label htmlFor="petName" className="visuallyHidden">Name:</label>
                        <input
                            type="text"
                            id="petName"
                            onChange={this.getUserInputName}
                            value={this.state.userInputName}
                            placeholder="Name"
                        />
                    </div>

                    {/* Photo */}
                    <div className="overallHealthFormPhoto">
                        <label htmlFor="petPhoto">Photo:</label>
                        <input
                            type="file"
                            name="petPhoto"
                            id="petPhoto"
                            onChange={this.getUserInputPhoto}

                            // Firebase storage:
                            // onChange={this.handleChange}
                            value={this.state.userInputPhoto}
                            placeholder="Photo"
                        />
                        {/* Messing with Firebase Storage */}
                        {/* <button onClick={this.handleUpload}>
                            Upload image
                        </button> */}
                    </div>

                    {/* Age */}
                    <div className="overallHealthFormAge">
                        <label htmlFor="petAge" className="visuallyHidden">Age:</label>
                        <input
                            type="text"
                            id="petAge"
                            onChange={this.getUserInputAge}
                            value={this.state.userInputAge}
                            placeholder="Age"
                        />
                    </div>

                    {/* Breed */}
                    <div className="overallHealthFormBreed">
                        <label htmlFor="petBreed" className="visuallyHidden">Breed:</label>
                        <input
                            type="text"
                            id="petBreed"
                            onChange={this.getUserInputBreed}
                            value={this.state.userInputBreed}
                            placeholder="Breed"
                        />
                    </div>

                    {/* Sex */}
                    <div className="overallHealthFormSex">
                        <p>Sex:</p>
                        <input
                            type="radio"
                            id="petSexMale"
                            name="sex"
                            value="Male"
                            onChange={this.getUserInputSex}
                        />
                        <label htmlFor="petSexMale">Intact male</label>

                        <input
                            type="radio"
                            id="petSexFemale"
                            name="sex"
                            value="Female"
                            onChange={this.getUserInputSex}
                        />
                        <label htmlFor="petSexFemale">Intact female</label>

                        <input
                            type="radio"
                            id="petSexNeutered"
                            name="sex"
                            value="Neutered"
                            onChange={this.getUserInputSex}
                        />
                        <label htmlFor="petSexNeutered">Neutered male</label>

                        <input
                            type="radio"
                            id="petSexSpayed"
                            name="sex"
                            value="Spayed"
                            onChange={this.getUserInputSex}
                        />
                        <label htmlFor="petSexSpayed">Spayed female</label>
                    </div>

                    {/* Form submit button */}
                    <button type="submit" value="submit" className="profileUpdate">
                        Update
                    </button>
                </form>
            </div>
        )
    }
}

export default ProfileForm;

// Tried to pass this.state as an argument to submitUserInput function in App.js (prop name = functionFromParent)...received the following error:
// Objects are not valid as a React child (found: object with keys {userInputPhoto, userInputName, userInputAge, userInputBreed, userInputSex}). If you meant to render a collection of children, use an array instead.