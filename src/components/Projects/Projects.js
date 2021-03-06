import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                { name: 'Open Educational Resource Development', category: 'lx', class: '' },
                { name: 'Web Application Development', category: 'web', class: '' },
                { name: 'Interactive Lesson Design', category: 'lx', class: '' },
                { name: 'Animation Design', category: 'web', class: '' },
                { name: 'User Interface Design', category: 'web', class: '' },
                { name: 'User Research', category: 'lx', class: '' },
                { name: 'Cloud Computing System Administration', category: 'web', class: '' },
                { name: 'Curriculum Development', category: 'lx', class: '' },
                { name: 'Game Design', category: 'web', class: '' },
                { name: 'Universal Design for Learning', category: 'lx', class: '' },
                { name: 'Learning Management System Administration', category: 'web', class: '' },
                { name: 'Feedback and Coaching', category: 'teaching', class: '' },
                { name: 'Audio and Video Editing', category: 'lx', class: '' },
                { name: 'Project Scoping', category: 'lx', class: '' },
                { name: 'Storyboard and Script Development', category: 'lx', class: '' },
                { name: 'Technical Training', category: 'lx', class: '' },
                { name: 'University Teaching', category: 'teaching', class: '' },
                { name: 'Qualitative Research', category: 'research', class: '' },
                { name: 'Evaluation and Testing', category: 'research', class: '' },
                { name: 'Workshop Design and Facilitation', category: 'teaching', class: '' },
                { name: 'Digital Storytelling', category: 'lx', class: '' },
                { name: 'Narrative Mapping', category: 'lx', class: '' },
                { name: 'Prototyping', category: 'research', class: '' },

            ],
            dev: [
                { name: 'JavaScript', img: 'javascript-plain.svg' },
                { name: 'React', img: 'react-original-wordmark.svg' },
                { name: 'Redux', img: 'redux-original.svg' },
                { name: 'AngularJS', img: 'angularjs-plain.svg' },
                { name: 'C#', img: 'csharp-original.svg' },
                { name: 'Bootstrap', img: 'bootstrap-plain.svg' },
                { name: 'CSS3', img: 'css3-original.svg' },
                { name: 'HTML5', img: 'html5-original.svg' },
                { name: 'Illustrator', img: 'ai.svg' },
                { name: 'PhotoShop', img: 'photoshop.svg' },
                { name: 'iMovie', img: 'imovie.svg' },
                { name: 'GarageBand', img: 'garage-band.svg' },
                { name: 'Google Scripts', img: 'google-plain.svg' },
                { name: 'Python', img: 'python-original.svg' },
                { name: 'Django', img: 'django-plain.svg' },
                { name: 'Node', img: 'nodejs-plain-wordmark.svg' },
                { name: 'PostgreSQL', img: 'postgresql-plain-wordmark.svg' },
                { name: 'Heroku', img: 'heroku-plain.svg' },
                { name: 'AWS', img: 'amazonwebservices-plain-wordmark.svg' },
                { name: 'GitHub', img: 'github-original.svg' },
                { name: 'Moodle', img: 'moodle-original-wordmark.svg' },
                { name: 'WordPress', img: 'wordpress-plain-wordmark.svg' }
            ],
            show: false,
            isDesktop: true,
            displayToolTip: false
        }
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate = () => {
        this.setState({
            isDesktop: window.innerWidth >= 1024
        })
    }
    setClass = (project) => {
        let projects = this.state.projects;
        if (project.class === '') {
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].category === project.category) {
                    projects[i].class = project.category;
                }
            }
            console.log(projects);
            this.setState({
                ...this.state,
                projects: projects
            })
        }
        else {
            return false;
        }
    }
    resetClass = (project) => {
        let projects = this.state.projects;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].category === project.category) {
                projects[i].class = '';
            }
        }
        this.setState({
            projects: projects
        });
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <div className="projects">
                <div className="flex-box-left">
                    <div className="column-1"></div>
                    <div className="column-10 grayed">
                        {isDesktop ? (<h3 className="greeting">I am experienced in:</h3>) : (<h3 onMouseEnter={() => this.setState({ ...this.state, show: true })} onMouseLeave={() => this.setState({ ...this.state, show: false })}>I am experienced in:</h3>)}
                        <div className="row-padding"></div>
                        <div className="flex-box">
                            {this.state.projects.map((project, i) => {
                                return (
                                    <div>
                                        {isDesktop ? (<div onClick={() => this.setState({ ...this.state, show: true })} onMouseEnter={() => this.setClass(project)} onMouseLeave={() => this.resetClass(project)} className={`project-card ${project.class}`} key={i}><p>{project.name}</p></div>) :
                                            (<div onMouseEnter={() => this.setClass(project)} onMouseLeave={() => this.resetClass(project)} className={`project-card ${project.class}`} key={i}><p>{project.name}</p></div>)}
                                    </div>

                                )
                            })}
                        </div>
                        <div className="row-padding"></div>


                    </div>
                </div>
                <Dialog open={this.state.show} onClose={() => this.setState({ ...this.state, show: false })}>
                    <DialogTitle>
                        <div className="flex-end">
                            <button className="close" onClick={() => this.setState({ ...this.state, show: false })} ><CloseIcon /></button>
                        </div>
                        <h3 className="title">Interested in working together?</h3>


                    </DialogTitle>
                    <p className="room">I am currently available for freelance learning design and web development work. Send me an email at <a className="email-link" href="mailto:larsmackenzie@gmail.com">larsmackenzie@gmail.com</a> to get the conversation started.</p>
                    <div className="flex-box-center space">
                        <img src={require('../images/send (1).png')} alt="paper airplane" height="64px" />
                    </div>

                </Dialog>
                <div className="flex-box flex-center">
                    <img src={require('../images/typing.gif')} alt="typing" />
                </div>

            </div>
        )
    }

}

export default Projects; 
