import React from 'react';

import Heart from '../assets/heart.png';
import Chart from '../assets/chart.png';
import Food from '../assets/food.png';
import Poison from '../assets/poison.png';

function Home(){

        const comingSoon = (e) => {
            alert("Diet section coming soon!");
        }

        return(
            <div className="Home" id="home">
                <h1>Fetch</h1>

                <div className="homeGrid">
                    <div className="homeQuadrant">
                        <a href="#overallHealth">
                            <div className="homeImageContainer">
                                <img src={Heart} alt="" />
                            </div>
                            <h2>Profile</h2>
                        </a>
                    </div>

                    <div className="homeQuadrant">
                        <a href="#chart">
                            <div className="homeImageContainer">
                                <img src={Chart} alt="" />
                            </div>
                            <h2>Chart</h2>
                        </a>
                    </div>
                    
                    <div className="homeQuadrant" onClick={comingSoon}>
                        <div className="homeImageContainer">
                            <img src={Food} alt="" />
                        </div>
                        <h2>Diet</h2>
                    </div>

                    <div className="homeQuadrant">
                        <a href="#toxicity">
                            <div className="homeImageContainer">
                                <img src={Poison} alt="" />
                            </div>
                            <h2>Toxicity</h2>
                        </a>
                    </div>
                </div>
            </div>
        );
}

export default Home;