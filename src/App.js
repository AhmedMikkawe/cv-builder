import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/General-info";
import Education from "./components/Education";
import Experience from "./components/Experience";
class App extends Component{
  constructor() {
    super();
  }
  render() {
    return (
        <div>
          <Header />
          <GeneralInfo />
          <Education />
          <Experience />
        </div>

    );
  }
}

export default App;
