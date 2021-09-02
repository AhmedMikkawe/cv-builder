import {Component} from "react";

class Education extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <div className="education container">
                <h2>Education</h2>
                <hr />
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="schoolName" id="scname" placeholder="School Name"/>
                        </div>
                        <div className="col">
                            <input type="text" name="majorName" id="major-name" placeholder="Major"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="date" name="dateStudy" id="date-study" placeholder="Date of Study"/>
                        </div>
                    </div>
                    <div className="row row-reversed">
                        <button type="submit" className="save-button">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Education;