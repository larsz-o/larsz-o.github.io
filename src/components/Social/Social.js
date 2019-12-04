import React, { Component } from 'react';

class Social extends Component {
    render(){
        return(
            <div className="flex-box-center">
            <div className="icon">
                <a href="https://github.com/larsz-o" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/github-logo.svg')} alt="GitHub" width="30px" />
                </a>
            </div>
            <div className="icon">
                <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/linkedin.svg')} alt="LinkedIn" width="30px" />
                </a>
            </div>
            <div className="icon">
                <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/twitter.svg')} alt="Twitter" width="30px" />
                </a>
            </div>
        </div>
        )
    }
}

export default Social; 