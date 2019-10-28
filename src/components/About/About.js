import React, { Component } from 'react';
import Header from '../Header/Header';
class About extends Component {
    render() {
  
        return (
            <div className="main">
              <Header display={'true'}/>
                        <div className="row-padding"></div>
                    
                    <div className="flex-box-left">
                    <div className="column-2"></div>
                        <div className="column-8">      
                             <h3 className="greeting">Hi, I'm Lars!</h3>
                                <p>I'm an instructional designer and full-stack web developer based in the Greater Boston area. I currently design online educational experiences for <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work.</a> I provide consultations to faculty about using technology in their teaching: from helping them select appropriate tools for any given task to building complete educational environments. I am driven by my commitments to usability, critical thinking, scalability, and accessibility when developing student learning experiences. </p>    
                               <p> I'm interdisciplinary and collaborative at my core. I love working with teams across institutions to iteratively improve on processes or to rethink how things are done.</p>
                               <p>I earned a doctorate from the University of Minnesota, where I explored the impacts of technology - <a href={require('../images/AfterlifeData.pdf')} target="_blank" rel="noopener noreferrer" title="Afterlife of Data">specifically, systems design</a> - on marginalized people. Before that, I earned a Bachelor's degree from Hampshire College, where I learned the power of experimental education first-hand.</p>
                               <p>I've always been interested in how the best technology works to connect people and solve problems, and how poorly designed tech can have diasterous impacts on individuals, communities, and the world at large. During my doctoral program, I turned this interest towards analyzing information architecture, examining how data functions as a commodity that structures the lives of everyday people. Always both a practitioner and a scholar, I wanted to learn how to build my own software and truly understand the mechanics of how algorithms, databases, and web architecture work. As a result, I went through a rigorous training in <a href="https://www.github.com/larsz-o" target="_blank" rel="noopener noreferrer">full-stack web development.</a> I quickly found myself totally consumed by this work at the intersection of technology and design. I get immense joy from building web applications, especially those that highlight research or community engaged projects.</p>
                               <p> I am on <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">Twitter,</a> but I usually just delete my tweets. In my spare time, I  am training to make the perfect pizza and working on building a robot for my freshwater aquarium. I already have the perfect <a href="https://res.cloudinary.com/dnrk3irn4/image/upload/v1555811740/IMG_0366.jpg" target="_blank" rel="noopener noreferrer">dog.</a></p>
                    </div>
                    </div>
                    <div className="row-padding"></div>
                    <div className="flex-box-center">
                        <div className="icon">
                            <a href="https://github.com/larsz-o" target="_blank" rel="noopener noreferrer">
                                <img src={require('../images/github-logo.svg')} alt="GitHub" width="40px"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">
                                <img src={require('../images/linkedin.svg')} alt="LinkedIn" width="40px"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">
                                <img src={require('../images/twitter.svg')} alt="Twitter" width="40px"/>
                            </a>
                        </div>
                    </div>

            </div>
        );
    }
}

export default About; 