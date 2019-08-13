import React, { Component } from 'react';

class ProjectView extends Component {
    render(){
        return(
            <section className="flex-box-evenly">
            {/* this is a card-type thing that will show each project */}
            {this.props.project}
            
            </section>
        )
    }
}
export default ProjectView;