import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Card from '../Card/Card'; 
import { Image } from 'react-bootstrap';
import axios from 'axios'; 

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            technologies: [],
        }
    }
    componentDidMount(){
        this.getProjects();
    }
    getProjects = () => {

    }
    render() {
        return (
            <div>
                <main role="main">
                    <section className="jumbotron white">
                        <div className="flex-box">
                            <h1 className="jumbotron-heading">Lars Mackenzie</h1>
                        </div>
                        <div className="flex-box margin-top">
                            <div className="col-md-4">
                                <Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/lars.jpg" alt="Lars headshot" height="300" rounded/>
                            </div>
                            <p className="col-md-4">I am a full-stack software developer with a background in research, higher education,
                            and social services.<br /> I love creating technology that can improve people's lives - from automating
                                                        tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized
                                                        data.
                            </p>
                        </div>
                        <div className="flex-box">
                            <div className="col-md-4">
                                <p className="text-center">
                                    <br />
                                    <a className="padding" href="http://github.com/larsz-o" target="_blank" rel="noopener noreferrer"><Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/github.png" alt="GitHub icon"/></a>
                                    <a className="padding" href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer"><Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/linkedin.png" alt="LinkedIn icon"/></a>
                                    <a className="padding" href="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/lars-resume-Nov2018.pdf" target="_blank" rel="noopener noreferrer"><Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/resume.png" alt="resume icon" /></a>
                                    <a className="padding" href="mailto:larsmackenzie@gmail.com"><Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/gmail.png" alt="email icon"/></a>
                                </p>
                            </div>
                            <p className="col-md-4">I'm always interested in connecting with others to talk about software, competitive cooking shows, and dogs. I've worked with a range of clients from small businesses to educators. If you are interested in hiring me to build software for you or your
                                    organization, please <a href="mailto:larsmackenzie@gmail.com">reach out!</a> 
                    </p>
                        </div>
                    </section>
                    <section className="jumbotron text-center white">
                        <div className="album py-5 bg-light">
                            <div className="container flex-box">
                                <h2>Projects</h2>
                                <div className="flex-box-cards">
                                    {this.state.projects.map((project, i) => {
                                        return (
                                            <Card key={i} project={project} history={this.props.history}/>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container flex-box">
                        <h2>Technologies</h2>
                    </div>
                    <div className="container flex-box">
                        {this.state.technologies.map((tech, i) => {
                            return (
                                <div className="icon-div" key={i}>
                                    <Image src={tech.icon} height={100} width={100} alt={tech.name} responsive/>
                                </div>
                            );
                        })}
                    </div>
                </main>
                <Footer/>
            </div >
        );
    }
}
export default HomePage; 