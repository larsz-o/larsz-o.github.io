import React, { Component } from 'react';
import Header from '../Header/Header';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Divider from '../Divider/Divider';

class About extends Component {
    render() {

        return (
            <div className="main">
                <Header display={'true'} />
                <div className="row-padding"></div>
                <Divider />
                <Bio />
                <Divider />
  
                <div className="row-padding"></div>
                <div className="flex-box-center">
                    <div className="icon">
                        <a href="https://github.com/larsz-o" target="_blank" rel="noopener noreferrer">
                            <img src={require('../images/github-logo.svg')} alt="GitHub" width="40px" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../images/linkedin.svg')} alt="LinkedIn" width="40px" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">
                            <img src={require('../images/twitter.svg')} alt="Twitter" width="40px" />
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default About; 