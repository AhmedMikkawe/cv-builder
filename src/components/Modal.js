import {Component} from "react";

class Modal extends Component{
    constructor(props) {
        super(props);
        this.handlClose = this.handlClose.bind(this);
    }
    handlClose(){
        let modal = document.getElementById("modal");
        modal.classList.add('hide');
        document.body.style.overflow = 'auto';
    }
    render() {
        return(
            <div className="modal-container hide" id="modal">
                <div className="modal" id="modal2">
                    <div className="row row-reversed">
                        <button onClick={this.handlClose} id='close-modal'>X</button>
                    </div>
                    <h2>Personal Information</h2>
                    <hr/>
                    <h3>Full Name:{this.props.info.general_info.first_name + " " +this.props.info.general_info.last_name}</h3>
                    <h4>Email: {this.props.info.general_info.email}</h4>
                    <h4>Phone: {this.props.info.general_info.phone}</h4>
                    <hr/>
                    <h2>Education Information</h2>
                    <hr/>
                    <h3>School Name: {this.props.info.education.school_name}</h3>
                    <h4>Major: {this.props.info.education.major_name}</h4>
                    <h4>Date: {this.props.info.education.date}</h4>
                </div>
            </div>
        );
    }
}
export default Modal;