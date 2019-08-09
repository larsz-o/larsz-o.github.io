import React, { Component } from 'react';

class ProjectView extends Component {
    render(){
        return(
            <section className="flex-box-evenly">
                 
            
            {this.props.project}
            
            </section>
        )
    }
}
export default ProjectView;