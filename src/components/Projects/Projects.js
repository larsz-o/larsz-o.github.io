import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                { name: 'eBook Publishing with PubPub and Bookdown', image: '', description: '' }, 
                { name: 'eBook Publishing with PubPub and Bookdown', image: '', description: '' },
                { name: 'eBook Publishing with PubPub and Bookdown', image: '', description: '' },

            ]
        }
    }
    render() {
        return (
            <div className="projects">
                <div className="flex-box-left">
                    <div className="column-2"></div>
                    <div className="column-8 grayed">
                        <h3>Projects and Skills</h3>

                        {/* some nice layout of projects: digital storytelling, moodle cloud, garageband/slides, bookdown, pubpub, aws, github classrooms, topic selection tool, feminist pedagogy, digital ethics, health and wellness training, etc. */}
                        
                        <div className="flex-box-evenly">
                            {this.state.projects.map((project, i) => {
                                return (
                                    <div className="project-card column-3" key={i}><h4>{project.name}</h4></div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Projects; 