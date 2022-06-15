import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
import spinner from './spinner.png';

const Home = () => {
    return (
        <div className="home">
            <header className="App-header">
                <img src={spinner} className="App-logo" alt="logo" />
                <h1>Coming soon...</h1>
            </header> 
        </div>
    )
}

export default Home;