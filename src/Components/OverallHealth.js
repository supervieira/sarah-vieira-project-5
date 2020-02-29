import React, { Component } from 'react';
import firebase from '../firebase';

class OverallHealth extends Component {
    constructor(){
        super();

        this.state = {
            userInputName: '',
            userInputbirthday: '',
            userInputbreed: '',
            userInputsex: '',
            userInputdiagnostics: [],
            userInputtreatments: []
        }
    }

    // componentDidMount(){
    //     const dbOverallHealthRef = firebase.database().ref('overallHealth');

    //     dbOverallHealthRef.on('value', (response) => {
    //         const dataFromOverallHealthDb = response.val();
    //         const nameToBeSet = "";
    //     })
    // }

    render() {
        return (
            <div className="OverallHealth">
                <header>
                    <div>
                        <label htmlFor=""></label>
                        <input type="image" src="" alt=""/>
                    </div>
                    <h2>Overall Health</h2>
                </header>

                <main>
                    <section className="petInfo">
                        <h3>Your Pet's Information</h3>
                        <h4>~~ Display pet's name here ~~</h4>

                        <div className="img"></div>

                        <form action="" className="petInfoForm">
                            <label htmlFor="petName">Name:</label>
                            <input type="text" id="petName"/>
                            <button type="submit" value="Submit">Update</button>

                            <br />
                            <label htmlFor="petBirthday">Birthday:</label>
                            <input type="text" />
                            <button type="submit">Update</button>

                            <br />
                            <label htmlFor="petBreed">Breed:</label>
                            <input type="text" id="petBreed"/>
                            <button type="submit">Update</button>

                            <br/>
                            <label htmlFor="petSexMale" >Male</label>
                            <input type="radio" name="petSex" id="petSexMale" value="intact male"/>
                            <label htmlFor="petSexFemale">Female</label>
                            <input type="radio" name="petSex" id="petSexFemale" value="intact female" />
                            <label htmlFor="petSexNeutered">Neutered</label>
                            <input type="radio" name="petSex" id="petSexNeutered" value="neutered male" />
                            <label htmlFor="petSexSpayed">Spayed</label>
                            <input type="radio" name="petSex" id="petSexSpayed" value="spayed female"/>
                            <button type="submit">Update</button>
                        </form>
                    </section>

                    <section className="diagnostics">
                        <form action="" className="petDxForm">
                            <label htmlFor="petDx">Diagnostics</label>
                            <input type="text" name="petDx" id="petDx"/>
                            <button type="submit">Update</button>
                        </form>
                    </section>

                    <section className="medications">
                        <form action="" className="PetTxForm">
                            <label htmlFor="petTx">Treatments</label>
                            <input type="text" name="petTx" id="petTx" />
                            <button type="submit">Update</button>
                        </form>
                    </section>
                </main>
            </div>
        );
    }
}

export default OverallHealth;
