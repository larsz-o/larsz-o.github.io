import React, { Component } from 'react';
import {connect} from 'react-redux'; 

class Card extends Component {

    handleClick = () => {
    console.log(this.props.project);
    this.props.dispatch({type: 'SET_PROJECT_TO_VIEW', payload: this.props.project});
    this.navTo();
    }
    navTo = () => {
        this.props.history.push('/moredetails'); 
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="project-card">
                    <h2 className="card-header">{this.props.project.title}</h2>
                    <img className="card-img-top" src={this.props.project.thumbnail} alt={this.props.project.title} width={250} />
                    <p className="project-card-text">{this.props.project.short_summary}</p>
                    <button className="btn btn-info my-2" onClick={this.handleClick}>Learn More</button>
                </div>
            </div>
        );
    }
}
export default connect()(Card); 