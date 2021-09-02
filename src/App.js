import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/General-info";
class App extends Component{
  constructor() {
    super();
  }
  render() {
    return (
        <div>
          <Header />
          <GeneralInfo />
        </div>

    );
  }
}

export default App;
