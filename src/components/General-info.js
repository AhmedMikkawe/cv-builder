import {Component} from "react";

class GeneralInfo extends Component{
    constructor(props) {
        super(props);
        this.onSaveClick = this.onSaveClick.bind(this);
    }
    onSaveClick(e){
        e.preventDefault();
        this.props.generalInfoHandler();
    }
    render() {
        return(
            <div className="container general-info">
                <h2>General Information</h2>
                <hr />
                <form>
                <div className="row">
                    <div className="col">
                        <input type="text" name="firstName" id="fname" placeholder="First Name"/>
                    </div>
                    <div className="col">
                        <input type="text" name="lastName" id="lname" placeholder="Last Name"/>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="col">
                        <input type="text" name="phoneNumber" id="phone" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="row row-reversed">
                    <button type="submit" className="save-button" onClick={this.onSaveClick}>Save</button>
                </div>
                </form>
            </div>
        );
    }
}
export default GeneralInfo;