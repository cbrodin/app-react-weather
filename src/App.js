import logo from './logo.svg';
import './App.css';

export default  function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <footer>
        <button className='btn btn-primary'>Hello</button>
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
            Open Sourced
          </a>
        </p>
      </footer>
    </div>
  );
}