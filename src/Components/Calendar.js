import React, { Component } from 'react';
import firebase from '../firebase';
// import moment from 'moment'

class Calendar extends Component {
    constructor() {
        super();

        this.state = {
            petSymptoms: [],
            petRx: [],
            userInputSymptom: '',
            userInputRx: ''
        }
    }

    componentDidMount() {
        const dbSymptomsRef = firebase.database().ref('calendar/symptoms');
        const dbRxRef = firebase.database().ref('calendar/prescriptions');

        dbSymptomsRef.on('value', (response) => {
            // Store response object in a variable:
            const dataFromDb = response.val();

            // Create a new array to store response properties
            const stateToBeSet = [];

            for (let key in dataFromDb) {
                // stateToBeSet.push(dataFromDb[key]);

                const symptomInfo = {
                    key: key,
                    name: dataFromDb[key]
                }

                stateToBeSet.push(symptomInfo);
            }

            // Set new stateToBeSet array to our state
            this.setState({
                petSymptoms: stateToBeSet,
            })
        })

        dbRxRef.on('value', (response) => {
            // Store response object in a variable:
            const dataFromDb = response.val();

            // Create a new array to store response properties
            const stateToBeSet = [];

            for (let key in dataFromDb) {
                // stateToBeSet.push(dataFromDb[key]);

                const rxInfo = {
                    key: key,
                    name: dataFromDb[key]
                }

                stateToBeSet.push(rxInfo);
            }

            // Set new stateToBeSet array to our state
            this.setState({
                petRx: stateToBeSet,
            })
        })
    }

    // -----------------------------------------------------------

    handleChangeSymptom = (e) => {
        this.setState({
            userInputSymptom: e.target.value,
        })
    }

    handleChangeRx = (e) => {
        this.setState({
            userInputRx: e.target.value,
        })
    }

    // -----------------------------------------------------------

    handleSymptomFormSubmit = (e) => {
        e.preventDefault();

        const dbSymptomsRef = firebase.database().ref('calendar/symptoms');

        dbSymptomsRef.push(this.state.userInputSymptom);

        this.setState({
            userInputSymptom: ""
        })
    }

    handleRxFormSubmit = (e) => {
        e.preventDefault();

        const dbRxRef = firebase.database().ref('calendar/prescriptions');

        dbRxRef.push(this.state.userInputRx);

        this.setState({
            userInputRx: ""
        })
    }

    // -----------------------------------------------------------

    removeSymptom = (symptomKey) => {
        const dbSymptomsRef = firebase.database().ref('calendar/symptoms');

        dbSymptomsRef.child(symptomKey).remove();
    }

    removePrescription = (rxKey) => {
        const dbRxRef = firebase.database().ref('calendar/prescriptions');

        dbRxRef.child(rxKey).remove();
    }

    // -----------------------------------------------------------
    
    render() {
        return (
            <div className="Calendar">
                <header>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h2>Calendar</h2>
                </header>

                <main className="calendarMain wrapper">
                    <div className="calendarSymptoms calendarQuad">
                        <h3>Pet Symptoms</h3>
                        <ul>
                            {
                                this.state.petSymptoms.map((symptom) => {
                                    return (
                                        <li key={symptom.key}>
                                            <div className="calendarListFlex">
                                                <p>{symptom.name}</p>
                                                <button onClick={() => {this.removeSymptom(symptom.key) }}>Remove</button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <form action="submit" onSubmit={this.handleSymptomFormSubmit}>
                            <label htmlFor="symptomInput" className="visuallyHidden">Add symptoms</label>
                            <input
                                type="text"
                                id="symptomInput"
                                onChange={this.handleChangeSymptom}
                                value={this.state.userInputSymptom}
                                placeholder="Add symptom"
                            />
                            <button type="submit">update</button>
                        </form>
                    </div>

                    {/* ----------------------------------------------------------------------------- */}
                    
                    <div className="calendarRx calendarQuad">
                        <h3>Prescriptions</h3>
                        <ul>
                            {
                                this.state.petRx.map((prescription) => {
                                    return (
                                        <li key={prescription.key}>
                                            <div className="calendarListFlex">
                                                <p>{prescription.name}</p>
                                                <button onClick={() => { this.removePrescription(prescription.key) }}>Remove</button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <form action="submit" onSubmit={this.handleRxFormSubmit}>
                            <label htmlFor="rxInput" className="visuallyHidden">Add prescriptions</label>
                            <input
                                type="text"
                                id="rxInput"
                                onChange={this.handleChangeRx}
                                value={this.state.userInputRx}
                                placeholder="Add prescriptions"
                            />
                            <button type="submit">update</button>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

export default Calendar;
