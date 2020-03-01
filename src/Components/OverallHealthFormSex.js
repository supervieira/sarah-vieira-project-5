import React, { Component } from 'react';

class OverallHealthFormSex extends Component {
    constructor() {
        super();

        this.state = {
            sex: "",
        }
    }


    getUserInputSex = (e) => {
        this.setState({
            userInputSex: e.target.value
        })
    }

    render() {
        return (
            <form
                className="overallHealthFormSex wrapper"
                onSubmit={(e) => this.props.functionFromParent(e, this.state.userInputSex)}
            >
                <p>Sex:</p>
                <label htmlFor="petSexMale">Intact male</label>
                <input
                    type="radio"
                    id="petSexMale"
                    name="sex"
                    value="Male"
                    onChange={this.getUserInputSex}
                />

                <label htmlFor="petSexFemale">Intact female</label>
                <input
                    type="radio"
                    id="petSexFeale"
                    name="sex"
                    value="Female"
                    onChange={this.getUserInputSex}
                />

                <label htmlFor="petSexNeutered">Neutered male</label>
                <input
                    type="radio"
                    id="petSexNeutered"
                    name="sex"
                    value="Neutered"
                    onChange={this.getUserInputSex}
                />

                <label htmlFor="petSexSpayed">Spayed female</label>
                <input
                    type="radio"
                    id="petSexSpayed"
                    name="sex"
                    value="Spayed"
                    onChange={this.getUserInputSex}
                />

                <button
                    type="submit"
                    value="submit"
                    onClick={(e) => this.props.functionFromParent(e, this.state.userInputSex)}
                >
                    Update
                </button>
            </form>
        )
    }
}

export default OverallHealthFormSex;