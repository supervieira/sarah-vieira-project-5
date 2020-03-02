import React, { Component } from 'react';

class OverallHealthFormAge extends Component {
    constructor() {
        super();

        this.state = {
            userInputAge: 0,
        }
    }


    getUserInputAge = (e) => {
        this.setState({
            userInputAge: e.target.value
        })
    }

    render() {
        return (
            <form
                className="overallHealthFormAge"
                onSubmit={(e) => this.props.functionFromParent(e, this.state.userInputAge)}
            >
                <label htmlFor="petAge">Age:</label>
                <input
                    type="text"
                    id="petAge"
                    onChange={this.getUserInputAge}
                />
            </form>
        )
    }
}

export default OverallHealthFormAge;