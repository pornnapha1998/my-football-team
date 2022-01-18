import React, { Component } from "react";
import "../../App.css";
import iconfootball from "../../assets/images/icon-main.gif";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={iconfootball} className="App-logo" alt="logo" />
          <p>FOOTBALL TEAM</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </header>
      </div>
    );
  }
}
