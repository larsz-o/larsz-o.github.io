import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Contact extends Component {
    render() {      
        return (
            <section className="main">
                <Nav />
                    <div className="dashed-edge-tight center">
                        <h2>Let's connect</h2>
                        <h3>Find me on social media</h3>
                        <div className="headline"><a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer"><img src={require('../images/twitter-min.png')} height="50px" alt="twitter icon" /></a>
                            <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin2.png')} height="50px" alt="linkedin icon" /></a>
                            <a href="https://github.com/larsz-o" target="_blank" rel="noopener noreferrer"><img src={require('../images/Octocat-min.png')} height="50px" alt="github icon" /></a></div>
                        <h3>or send me an <a className="link" href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">email!</a></h3>
                    </div>
            </section>
        );
    }
}
export default Contact; 