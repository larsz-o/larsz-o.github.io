import React, { Component } from 'react';

class ProjectView extends Component {
    render(){
        return(
            <section>
            <div class="column-4 project-card">
                <h3>{this.props.project.title}</h3>
                <img src={this.props.project.img} alt={this.props.project.img_desc} width="100%"/>
                <p>{this.props.project.description}</p>
                <div className="center"><a href={this.props.project.url} target="_blank" rel="noopener noreferrer">View project</a></div>
            </div>
            </section>
        )
    }
}
export default ProjectView;