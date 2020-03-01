import React, { Component } from 'react';
import firebase from '../firebase';

class PrintInput2 extends Component {
    componentDidMount(){
        
        const dbOverallHealth = firebase.database().ref('overallHealth')
        dbOverallHealth.update({ name: this.props.name })

        const dbName = firebase.database().ref('overallHealth/name')

        dbName.on('value', (response) => {
            console.log(response.val())

            const name = response.val();

            this.setState({
                name: name,
            }, () => {
                console.log(this.state.name)
            })
        })
    }
    
    render(){
        return (
            // How to keep info printed on page after refresh?
            <div className="wrapper">
                <p>Name: {this.props.name}</p>
                <div>
                    <img src="{props.photo}" alt="Photo of pet" />
                </div>
                <p>Age: {this.props.age}</p>
                <p>Breed: {this.props.breed}</p>
                <p>Sex: {this.props.sex}</p>
            </div>
        )
    }
}

export default PrintInput2;
