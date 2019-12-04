import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                { name: 'Open Educational Resource Development',  category: 'lx', class: '' }, 
                { name: 'Web Application Development', category: 'web', class: '' },
                { name: 'Interactive Lesson Design', category: 'lx', class: '' },
                { name: 'Learning Management System Administration', category: 'web', class: '' },
                { name: 'Website and LMS Design', category: 'web', class: '' },
                { name: 'Cloud Computing System Administration', category: 'web', class: '' },
                { name: 'Curriculum Development', category: 'lx', class: '' },
                { name: 'Universal Design for Learning', category: 'lx', class: '' },
                { name: 'Feedback and Coaching', category: 'teaching', class: '' },
                { name: 'Audio and Video Editing', category: 'lx', class: '' },
                { name: 'Project Scoping', category: 'lx', class: '' },
                { name: 'Storyboard and Script Development', category: 'lx', class: '' },
                { name: 'Technical Training', category: 'lx', class: '' },
                { name: 'University Teaching', category: 'teaching', class: '' },
                { name: 'Qualitative Research', category: 'research', class: '' },
                { name: 'Evaluation and Testing', category: 'research', class: '' },
                {name: 'Workshop Design and Facilitation', category: 'teaching', class: ''}
                
            ],
            dev: [
                {name: 'AWS', img: 'amazonwebservices-plain-wordmark.svg'},
                {name: 'AngularJS', img: 'angularjs-plain.svg'},
                {name: 'Bootstrap', img: 'bootstrap-plain.svg'},
                {name: 'CSS3', img: 'css3-original.svg'},
                {name: 'Django', img: 'django-plain.svg'},
                {name: 'GitHub', img: 'github-original.svg'},
                {name: 'Google Scripts', img: 'google-plain.svg'},
                {name: 'Heroku', img: 'heroku-plain.svg'},
                {name: 'HTML5', img: 'html5-original.svg'},
                {name: 'JavaScript', img: 'javascript-plain.svg'},
                {name: 'Moodle', img: 'moodle-original-wordmark.svg'},
                {name: 'Node', img: 'nodejs-plain-wordmark.svg'},
                {name: 'PostgreSQl', img: 'postgresql-plain-wordmark.svg'},
                {name: 'Python', img: 'python-original.svg'},
                {name: 'React', img: 'react-original-wordmark.svg'},
                {name: 'Redux', img: 'redux-original.svg'},
                {name: 'WordPress', img: 'wordpress-plain-wordmark.svg'}
            ]
        }
    }
    setClass = (project) => {
        let projects = this.state.projects;
        if(project.class === ''){
            for (let i = 0; i < projects.length; i++){
                if (projects[i].category === project.category){
                    projects[i].class = project.category;
                }
            }
            console.log(projects);
            this.setState({
                projects: projects
            })
        }
        else {
            return false; 
        }
    }
    resetClass = (project) => {
        let projects = this.state.projects;
        for (let i = 0; i < projects.length; i++){
            if (projects[i].category === project.category){
                projects[i].class = '';
            }
        }
        this.setState({
            projects: projects
        });
    }
    render() {
        return (
            <div className="projects">
                <div className="flex-box-left">
                    <div className="column-2"></div>
                    <div className="column-8 grayed">
                        <h3>Skills</h3>
                        <div className="flex-box">
                            {this.state.projects.map((project, i) => {
                                return (
                                    <div onMouseEnter={()=>this.setClass(project)} onMouseLeave={()=>this.resetClass(project)} className={`project-card ${project.class}`} key={i}><p>{project.name}</p></div>
                                )
                            })}
                        </div>
                        <div className="row-padding"></div>
                        <div className="flex-box-center">
                            {this.state.dev.map((icon, i) => {
                                return(
                                    <img key={i} src={require(`../images/icons/${icon.img}`)} alt={icon.name} className="icon" height="75px"/>
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