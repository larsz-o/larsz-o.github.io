import React, { Component } from 'react';
import { Jumbotron, Grid, Col } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <div>
                <main role="main">
                    <Jumbotron>
                        <div className="flex-box">
                            <h1 className="jumbotron-heading">Lars Mackenzie</h1>
                        </div>
                  
                    <div className="flex-box margin-top">
                        <div className="col-md-4">
                            <img src="../../static/lars.jpg" alt="Lars headshot" height="300" />
                        </div>
                        <p className="lead text-muted col-md-4">I am a full-stack software developer with a background in research, higher education,
                    and social services.<br /> I love creating technology that can improve people's lives - from automating
                            tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized
                            data.
                </p>
                    </div>
                
                    <div className="flex-box">
                        <div className="col-md-4">
                            <p className="text-center">
                                <br />
                                <a href="http://github.com/larsz-o" target="_blank" rel="noopener noreferrer"><img src="{% static 'github.png' %}" /></a>
                                <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer"><img src="{% static 'linkedin.png' %}" /></a>
                                <a href="{% static 'lars-resume-Nov2018.pdf' %}" target="_blank" rel="noopener noreferrer"><img src="{% static 'resume.png' %}" /></a>
                                <a href="mailto:larsmackenzie@gmail.com"><img src="{% static 'gmail.png' %}" /></a>
                            </p>
                        </div>
                        <p className="lead text-muted col-md-4">I'm always interested in connecting with others to talk about software, diversity
                                and equity work, and dogs. If you are interested in hiring me to build software for you or your
                                organization, please reach out!
                    </p>
                    </div>
            </Jumbotron>
                </main>
            </div>
        );
    }
}
export default HomePage; 