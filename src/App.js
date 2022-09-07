import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <footer>
        <p>
          This project was coded by{" "}
          <a className="App-link" href="#" target="_blank">
            Chelsea Brodin
          </a>{" "}
          and is{" "}
          <a
            className="App-link"
            href="https://github.com/cbrodin/app-react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open Sourced on Git-Hub
          </a>
        </p>
      </footer>
    </div>
  );
}
