import React, { Component } from 'react';
import firebase from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Diagnosis from '../assets/diagnosis.png';
import Prescription from '../assets/prescription.png';


class Calendar extends Component {
    constructor() {
        super();

        this.state = {
            petSymptoms: [],
            petRx: [],
            userInputSymptom: '',
            userInputRx: '',
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.petInfo.name !== prevProps.petInfo.name) {
            this.updateState();
        }
    }

    componentDidMount() {
        let symptomArray = [];
        for (let key in this.props.petInfo.calendar.symptoms){            
            const temp = {
                key: key,
                value: this.props.petInfo.calendar.symptoms[key]
            }

            symptomArray.push(temp)
        }

        let rxArray = [];
        for (let key in this.props.petInfo.calendar.prescriptions) {
            const temp = {
                key: key,
                value: this.props.petInfo.calendar.prescriptions[key]
            }

            rxArray.push(temp)
        }

        this.setState({
            petSymptoms: symptomArray,
            petRx: rxArray,
        })
    }

    updateState = () => {
        const dbSymptomsRef = firebase.database().ref('pets/' + this.props.petInfo.name + '/calendar/symptoms');
        const dbRxRef = firebase.database().ref('pets/' + this.props.petInfo.name + '/calendar/prescriptions');
    
        dbSymptomsRef.on('value', (response) => {
            // Store response object in a variable:
            const dataFromDb = response.val();
        
            // Create a new array to store response properties
            const stateToBeSet = [];
    
            for (let key in dataFromDb) {
                // stateToBeSet.push(dataFromDb[key]);
    
                const symptomInfo = {
                    key: key,
                    value: dataFromDb[key]
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
                    value: dataFromDb[key]
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

        const dbSymptomsRef = firebase.database().ref('pets/' + this.props.petInfo.name + '/calendar/symptoms');

        dbSymptomsRef.push(this.state.userInputSymptom);

        let arrayCopy = this.state.petSymptoms
        arrayCopy.push(this.state.userInputSymptom)

        this.setState({
            userInputSymptom: "",
            petSymptoms: arrayCopy
        })

        this.updateState();
    }

    handleRxFormSubmit = (e) => {
        e.preventDefault();

        const dbRxRef = firebase.database().ref('pets/' + this.props.petInfo.name + '/calendar/prescriptions');

        dbRxRef.push(this.state.userInputRx);

        let arrayCopy = this.state.petRx
        arrayCopy.push(this.state.userInputRx)

        this.setState({
            userInputRx: "",
            petRx: arrayCopy
        })

        this.updateState();
    }

    // -----------------------------------------------------------

    removeSymptom = (symptomKey) => {
        const dbSymptomsRef = firebase.database().ref('pets/' + this.props.petInfo.name + '/calendar/symptoms');

        dbSymptomsRef.child(symptomKey).remove();

        this.updateState();
    }

    removePrescription = (rxKey) => {
        const dbRxRef = firebase.database().ref('pets/' + this.props.petInfo.name + '/calendar/prescriptions');

        dbRxRef.child(rxKey).remove();

        this.updateState();
    }

    // -----------------------------------------------------------
    
    render() {
        return (
            <div className="Calendar" id="chart">
                <div>
                    <h2>Chart</h2>
                </div>

                <div className="calendarMain wrapper">
                    <div className="calendarSymptoms calendarQuad">
                        <div className="chartHeaderFlex">
                            <h3>Diagnostics</h3>
                            <div><img src={Diagnosis} alt="Veterinary stethoscope"/></div>
                        </div>
                        <ul>
                            {
                                this.state.petSymptoms.map((symptom) => {
                                    return (
                                        <li key={symptom.key}>
                                            <div className="calendarListFlex">
                                                <p>{symptom.value}</p>
                                                <button className="trashButton" onClick={() => {this.removeSymptom(symptom.key) }}>
                                                    <FontAwesomeIcon className="trashIcon" icon="trash-alt"/>
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <form action="submit" onSubmit={this.handleSymptomFormSubmit}>
                            <label htmlFor="symptomInput" className="visuallyHidden">Add diagnosis</label>
                            <input
                                type="text"
                                id="symptomInput"
                                onChange={this.handleChangeSymptom}
                                value={this.state.userInputSymptom}
                                placeholder="Add diagnosis"
                            />
                            <button type="submit">update</button>
                        </form>
                    </div>

                    {/* ----------------------------------------------------------------------------- */}
                    
                    <div className="calendarRx calendarQuad">
                        <div className="chartHeaderFlex">
                            <h3>Prescriptions</h3>
                            <div><img src={Prescription} alt="Prescription pills" /></div>
                        </div>
                        <ul>
                            {
                                this.state.petRx.map((prescription) => {
                                    return (
                                        <li key={prescription.key}>
                                            <div className="calendarListFlex">
                                                <p>{prescription.value}</p>
                                                <button className="trashButton" onClick={() => { this.removePrescription(prescription.key) }}>
                                                    <FontAwesomeIcon className="trashIcon" icon="trash-alt" />
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <form action="submit" onSubmit={this.handleRxFormSubmit}>
                            <label htmlFor="rxInput" className="visuallyHidden">Add prescription</label>
                            <input
                                type="text"
                                id="rxInput"
                                onChange={this.handleChangeRx}
                                value={this.state.userInputRx}
                                placeholder="Add prescription"
                            />
                            <button type="submit">update</button>
                        </form>
                    </div>
                            
                    <button className="back">
                        <a href="#home">Back</a>
                    </button>
                </div>
            </div>
        );
    }
}

export default Calendar;
