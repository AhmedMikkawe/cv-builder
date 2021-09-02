import {Component} from "react";

class Header extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <nav>
                <div className="container">
                    <h1>CV Builder</h1>
                </div>
            </nav>
        );
    }
}
export default Header;