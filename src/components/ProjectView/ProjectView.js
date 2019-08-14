import React, { Component } from 'react';

class ProjectView extends Component {
    render(){
        return(
            <section className="flex-box-evenly">
            <div class="project-display">
                <h3>{this.props.project.title}</h3>
                <img src={this.props.project.img} alt={this.props.project.img_desc}/>
                <p>{this.props.project.description}</p>
                <a href={this.props.project.url} target="_blank" rel="noopener noreferrer">View live demo</a>
            </div>
            </section>
        )
    }
}
export default ProjectView;