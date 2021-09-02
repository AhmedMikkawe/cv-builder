import {Component} from "react";

class Experience extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="experience container">
                <h2>Experience</h2>
                <hr />
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="companyName" id="company-name" placeholder="Company Name"/>
                        </div>
                        <div className="col">
                            <input type="text" name="positionTitle" id="position-title" placeholder="Position Title"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="from-experience">From:</label>
                            <input type="date" name="fromExperience" id="from-experience" placeholder="From"/>
                        </div>
                        <div className="col">
                            <label htmlFor="to-experience">To:</label>
                            <input type="date" name="toExperience" id="to-experience" placeholder="To"/>
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
export  default Experience;