import React, { Component } from 'react';

class OverallHealthFormLink extends Component {
    constructor() {
        super();

        this.state = {
            userInputPhoto: "",
        }
    }


    getUserInputPhoto = (e) => {
        this.setState({
            userInputPhoto: e.target.value
        })
    }

    render() {
        return (
            <form
                className="overallHealthFormPhoto"
                onSubmit={(e) => this.props.functionFromParent(e, this.state.userInputPhoto)}
                onChange={(e) => this.props.functionFromParent(e, this.state.userInputPhoto)}
            >
                <label htmlFor="petPhoto">Photo:</label>
                <input
                    type="file"
                    name="petPhoto"
                    id="petPhoto"
                    onChange={this.getUserInputPhoto}
                />

                {/* <button
                    type="submit"
                    value="submit"
                    onClick={(e) => this.props.functionFromParent(e, this.state.userInputPhoto)}
                >
                    Update
                </button> */}

            </form>
        )
    }
}

export default OverallHealthFormLink;