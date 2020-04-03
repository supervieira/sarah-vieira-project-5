import React from 'react';
import PetPoisons from '../assets/pet-poisons.jpg';

function Toxicity(){
    return(
        <div className="Toxicity" id="toxicity">
            <h2>Toxicity</h2>
            
            <div className="wrapper">
                <div className="petPoisonImg">
                    <img src={PetPoisons} alt="Diagram of household toxins to pets"/>
                </div>
    
                <button className="back" tabindex="-1">
                    <a href="#home">Back</a>
                </button>
            </div>

        </div>
    );
}

export default Toxicity;