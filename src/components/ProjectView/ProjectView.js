import React, { Component } from 'react';

class ProjectView extends Component {
    render(){
        return(
            <div className="column-4 project-card">
                <h3>{this.props.project.title}</h3>
                <a href={this.props.project.img}><img src={this.props.project.img} alt={this.props.project.img_desc}/></a>
                <p>{this.props.project.description}</p>
               {this.props.demo && <div className="center"><a href={this.props.project.url} target="_blank" rel="noopener noreferrer">View project</a></div>} 
            </div>
        )
    }
}
export default ProjectView;