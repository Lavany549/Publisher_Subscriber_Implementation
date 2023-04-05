import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
          Welcome to Publisher-Subscriber
          </h1>
        
        
        <div>
          <h3>
          <a
          className="App-link"
          href="https://github.com/Lavany549/Publisher_Subscriber_Implementation"
          target="_blank"
          rel="noopener noreferrer"
          >
          click to get Git Repo of the project
          </a></h3>
        </div>
        <div>
          <h2>
            <Link to="/login">Login</Link> or 
          
            <Link to="/signup">Signup</Link>
          </h2>
        </div>

        <br />
        <br />
        <br />
        </header>
        </div>
    </div>
  
  );
}

export default Home;
