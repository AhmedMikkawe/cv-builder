import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/General-info";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Modal from "./components/Modal";
class App extends Component{
  constructor(props) {
    super(props);
      this.generalInfoHandler = this.generalInfoHandler.bind(this);
      this.educationHandler = this.educationHandler.bind(this);
      this.experienceHandler = this.experienceHandler.bind(this);
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
    experienceHandler(){
        let companyName = document.getElementById('company-name').value;
        let positionTitle = document.getElementById('position-title').value;
        let dateFrom = document.getElementById('from-experience').value;
        let dateTo= document.getElementById('to-experience').value;
        this.setState({
            experience : {
                company_name : companyName,
                position_title : positionTitle,
                date : {
                    from : dateFrom,
                    to : dateTo,
                },
            }
        });
    }
    preview(){
        let modal = document.getElementById("modal");
        modal.style.overflowY = "scroll";
        let modal2 = document.getElementById("modal2");
        modal2.style.top = "200px";
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hide');
    }
  render() {
    return (
        <div>
          <Header />
            <div className="row center">
                <button onClick={this.preview} id="preview">Preview</button>
            </div>
          <GeneralInfo clickHandler = {this.generalInfoHandler}/>
          <Education clickHandler = {this.educationHandler}/>
          <Experience clickHandler = {this.experienceHandler}/>
          <Modal info={this.state} />
        </div>

    );
  }
}

export default App;
