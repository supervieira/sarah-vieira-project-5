import React, { Component } from 'react';

class OverallHealthFormBreed extends Component {
    constructor() {
        super();

        this.state = {
            userInputBreed: "",
        }
    }


    getUserInputBreed = (e) => {
        this.setState({
            userInputBreed: e.target.value
        })
    }

    render() {
        return (
            <form
                className="overallHealthFormBreed"
                onSubmit={(e) => this.props.functionFromParent(e, this.state.userInputBreed)}
            >
                <label htmlFor="petBreed">Breed:</label>
                <input
                    type="text"
                    id="petBreed"
                    onChange={this.getUserInputBreed}
                />
            </form>
        )
    }
}

export default OverallHealthFormBreed;