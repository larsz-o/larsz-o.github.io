import React, { Component } from 'react';

class Social extends Component {
    render(){
        return(
            <div className="flex-box-center">
                   {/* <div className="icon mirror">
                <a href="https://docs.google.com/document/d/13CpnBm968fYaO_TUW_baLE7okG6sEkg_Otq9w0qMEW0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/people.svg')} alt="resume" width="40px" />
                </a>
            </div> */}
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
            <div className="icon">
                <a href="mailto:larsmackenzie@gmail.com" rel="noopener noreferrer">
                    <img src={require('../images/envelope.svg')} alt="email" width="30px" />
                </a>
            </div>
        </div>
        )
    }
}

export default Social; 
