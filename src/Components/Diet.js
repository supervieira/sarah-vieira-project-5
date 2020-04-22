import React, { Component } from 'react';

class Diet extends Component {
    constructor() {
        super();

        this.state = {
            userInputWeight: '',
            weightUnit: '',
            userInputDiet: '',
            userInputFeedingAmounts: ''
        }
    }

    getUserInput = (e) => {
        let stateItem = e.target.name;

        this.setState({
            stateItem: e.target.value
        })
    }

    // This function will run "submitUserInput" function from parent
    handleFormSubmit = (e) => {
        this.props.functionFromParent(e, this.state)
    }

    render() {
        return (
            <div className="Diet" id="diet">
                <h2>Diet</h2>

                <div className="wrapper">
                    <form
                        action="submit"
                        className="profileForm"
                        onSubmit={this.handleFormSubmit}
                    >
                        {/* Weight */}
                        <div className="dietFormWeight">
                            <label htmlFor="weight" className="visuallyHidden">Weight:</label>
                            <input
                                type="text"
                                id="weight"
                                onChange={this.getUserInput}
                                value={this.state.userInputWeight}
                                placeholder="Weight"
                                name="userInputWeight"
                            />
                        </div>

                        {/* Weight Units */}
                        <div className="dietFormWeightUnit">
                            <p>Weight units:</p>
                            <label htmlFor="weightUnit">kgs</label>
                            <input
                                type="radio"
                                id="weightUnit"
                                onChange={this.getUserInput}
                                value="kgs"
                                name="weightUnit"
                            />
                            <label htmlFor="weightUnit">lbs</label>
                            <input
                                type="radio"
                                id="weightUnit"
                                onChange={this.getUserInput}
                                value="lbs"
                                name="weightUnit"
                            />
                        </div>

                        {/* Name of Diet */}
                        <div className="dietFormDiet">
                            <label htmlFor="petDiet" className="visuallyHidden">Name of current diet:</label>
                            <input
                                type="text"
                                id="petDiet"
                                onChange={this.getUserInput}
                                value={this.state.userInputDiet}
                                placeholder="Name of current diet"
                                name="userInputDiet"
                            />
                        </div>

                        {/* Current Feeding Amounts */}
                        <div className="dietFormFeedingAmounts">
                            <label htmlFor="petFeedingAmounts" className="visuallyHidden">Daily feeding amounts:</label>
                            <input
                                type="text"
                                id="petFeedingAmounts"
                                onChange={this.getUserInput}
                                value={this.state.userInputFeedingAmounts}
                                placeholder="Daily feeding amounts"
                                name="userInputFeedingAmounts"
                            />
                        </div>

                        {/* Form submit button */}
                        <button type="submit" value="submit" className="profileUpdate">
                            Update
                        </button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Diet;