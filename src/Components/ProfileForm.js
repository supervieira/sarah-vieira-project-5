import React, { Component } from 'react';

class ProfileForm extends Component{
    constructor(){
        super();

        this.state = {
            userInputName: '',
            userInputAge: '',
            userInputBreed: '',
            userInputSex: '',
            userInputSpecies: '',
            userInputUrl: '',
            userInputPhoto: '',
            imgFile: '',
            imgSrc: null,
        }
    }

    // Name onChange event listener
    getUserInputName = (e) => {
        this.setState({
            userInputName: e.target.value
        })
    }
    
    // Photo onChange event listener
    getUserInputPhoto = (e) => {        
        this.setState({
            userInputPhoto: e.target.value,
            imgFile: e.target.files[0],
            imgSrc: URL.createObjectURL(e.target.files[0])
        })
    }
    
    // URL onChange event listener
    getUserInputUrl = (e) => {
        this.setState({
            userInputUrl: e.target.value
        })
    }

    // Age onChange event listener
    getUserInputAge = (e) => {        
        this.setState({
            userInputAge: e.target.value
        })
    }

    // Breed onChange event listener
    getUserInputBreed = (e) => {
        this.setState({
            userInputBreed: e.target.value
        })
    }

    // Sex onChange event listener
    getUserInputSex = (e) => {
        this.setState({
            userInputSex: e.target.value
        })
    }

    // Species onChange event listener
    getUserInputSpecies = (e) => {
        this.setState({
            userInputSpecies: e.target.value
        })
    }

    // This function will run "submitUserInput" function from parent, as well as empty our local state so that our form empties after submit
    handleFormSubmit = (e) => {
        this.props.functionFromParent(e, this.state)

        this.setState({
            userInputName: '',
            userInputAge: '',
            userInputBreed: '',
            userInputSex: '',
            userInputSpecies: '',
            userInputUrl: '',
            userInputPhoto: '',
            imgFile: '',
            imgSrc: null,
        })
    }

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
                            name="userInputName"
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
                            value={this.state.userInputPhoto}
                            placeholder="Photo"
                        />
                    </div>

                    {/* URL */}
                    <div className="overallHealthFormUrl">
                        <label htmlFor="petUrl" className="visuallyHidden">Photo url</label>
                        <input
                            type="text"
                            name="petUrl"
                            id="petUrl"
                            onChange={this.getUserInputUrl}
                            value={this.state.userInputUrl}
                            placeholder="Photo URL"
                        />
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
                            name="userInputAge"
                        />
                    </div>

                    {/* Species */}
                    <div className="overallHealthFormSpecies">
                        <p>Species:</p>
                        <input
                            type="radio"
                            id="petSpeciesDog"
                            value="Dog"
                            onChange={this.getUserInputSpecies}
                            name="userInputSpecies"
                        />
                        <label htmlFor="petSpeciesDog">
                            Dog
                        </label>

                        <input
                            type="radio"
                            id="petSpeciesCat"
                            value="Cat"
                            onChange={this.getUserInputSpecies}
                            name="userInputSpecies"
                        />
                        <label htmlFor="petSpeciesCat">
                            Cat
                        </label>
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
                            name="userInputBreed"
                        />
                    </div>

                    {/* Sex */}
                    <div className="overallHealthFormSex">
                        <p>Sex:</p>
                        <input
                            type="radio"
                            id="petSexMale"
                            value="Male"
                            onChange={this.getUserInputSex}
                            name="userInputSex"
                        />
                        <label htmlFor="petSexMale">Intact male</label>

                        <input
                            type="radio"
                            id="petSexFemale"
                            value="Female"
                            onChange={this.getUserInputSex}
                            name="userInputSex"
                        />
                        <label htmlFor="petSexFemale">Intact female</label>

                        <input
                            type="radio"
                            id="petSexNeutered"
                            value="Neutered"
                            onChange={this.getUserInputSex}
                            name="userInputSex"
                        />
                        <label htmlFor="petSexNeutered">Neutered male</label>

                        <input
                            type="radio"
                            id="petSexSpayed"
                            value="Spayed"
                            onChange={this.getUserInputSex}
                            name="userInputSex"
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