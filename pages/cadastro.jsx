import React, {Component} from "react";
import { cadPost } from "../store/actions/cadAction"
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import Form from "../components/Form";


class Cadastro extends Component{
    render(){
        return(
            <div>
                <Form onSubmit={this.props.cadPost}/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({
            cadPost
        }, dispatch)
    );
}

export default connect(null, mapDispatchToProps)(Cadastro)