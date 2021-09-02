import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/General-info";
import Education from "./components/Education";
import Experience from "./components/Experience";
class App extends Component{
  constructor(props) {
    super(props);
      this.generalInfoHandler = this.generalInfoHandler.bind(this);
      this.educationHandler = this.educationHandler.bind(this);
      this.state = {
      general_info:{
          first_name : "",
          last_name : "",
          email : "",
          phone : "",
      },
      education : {
          school_name : "",
          major_name : "",
          date : "",
      },
      experience : {
        company_name : "",
        position_title : "",
        date : {
            from : "",
            to : "",
        },
      },
    };
  }
    generalInfoHandler(){
        let firstName = document.getElementById('fname').value;
        let lastName = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        this.setState({
            general_info: {
                first_name : firstName,
                last_name : lastName,
                email: email,
                phone: phone
            },
        });
    }
    educationHandler(){
        let schoolName = document.getElementById('scname').value;
        let majorName = document.getElementById('major-name').value;
        let date = document.getElementById('date-study').value;
        this.setState({
            education : {
                school_name : schoolName,
                major_name : majorName,
                date : date,
            },
        });
    }
  render() {
    return (
        <div>
          <Header />
          <GeneralInfo clickHandler = {this.generalInfoHandler}/>
          <Education clickHandler = {this.educationHandler}/>
          <Experience />
        </div>

    );
  }
}

export default App;
