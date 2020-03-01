import React from 'react';

import Heart from '../assets/heart.png';
import Chart from '../assets/chart.png';
import Food from '../assets/food.png';
import Poison from '../assets/poison.png';

function Home(){
        return(
            <div className="Home">
                <h1>Fetch</h1>

                <div className="homeGrid">
                    <div className="homeQuadrant">
                        <div className="homeImageContainer">
                            <img src={Heart} alt="" />
                        </div>
                        <h2>Overall Health</h2>
                    </div>

                    <div className="homeQuadrant">
                        <div className="homeImageContainer">
                            <img src={Chart} alt="" />
                        </div>
                        <h2>Calendar</h2>
                    </div>
                    
                    <div className="homeQuadrant">
                        <div className="homeImageContainer">
                            <img src={Food} alt="" />
                        </div>
                        <h2>Diet</h2>
                    </div>

                    <div className="homeQuadrant">
                        <div className="homeImageContainer">
                            <img src={Poison} alt="" />
                        </div>
                        <h2>Toxicity</h2>
                    </div>
                </div>
            </div>
        );
}

export default Home;