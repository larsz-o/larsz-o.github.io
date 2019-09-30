import React, { Component } from 'react';
import Diamonds from '../Diamonds/Diamonds';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true
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
            isDesktop: window.innerWidth >= 768
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <section className="main">
                    <div className="flex-box-between baseline">
                        <div className="column-5">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>
                        <div className="flex-box-between nav column-5">
                            <h4 className="space"><a href="/">About</a></h4>
                            <h4 className="space"><a href="/#/projects">Projects</a></h4>
                            <h4 className="space"><a href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">Contact Me</a></h4>
                        </div>
                    </div>
                    
                        <div className="row-padding"></div>
                  <div className="flex-box-left">
                        <div className="column-4 column-md-6">
                            <img src={require('../images/lars.jpg')} alt="Lars headshot" height="320"/>
                        </div>
                        <div className="column-2 column-md-12"></div>
                        <div className="column-6 column-md-12">
                            <ul>
                              <div>{isDesktop? (<li className="list-border">I am a problem solver.</li>):(<li >I am a problem solver.</li>)}</div>
                                <li>I currently design online educational experiences for <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work.</a></li>
                                <li>I do a lot of cool things at my job, like launch AWS environments, build web apps, and consult with instructors on how to increase interactivity, collaboration, and peer learning in online classrooms.</li>
                                <li>I care about accessibility, information architecture, and learning something new every day.</li>
                                <li>I'm interdisciplinary and collaborative at my core: I love working with teams across institutions to iteratively improve on processes or to rethink how things are done.</li>
                                <li>I went through a rigorous training in <a href="https://www.github.com/larsz-o" target="_blank" rel="noopener noreferrer">full-stack web development </a>(and I really love building software).</li>
                                <li>I am trained as an academic and I wrote a dissertation about how <a href={require('../images/AfterlifeData.pdf')} target="_blank" rel="noopener noreferrer" title="Afterlife of Data">marginalized people navigate through commerical and medical information systems.</a></li>
                                <li>I like reading <a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer">Twitter</a> but usually just delete my tweets.</li>
                                <li>I am training to make the perfect pizza.</li>
                                <li>I already have the perfect <a href="https://res.cloudinary.com/dnrk3irn4/image/upload/v1555811740/IMG_0366.jpg" target="_blank" rel="noopener noreferrer">dog.</a></li>
                            </ul>
                            {!isDesktop && <div className="margin-top"><Diamonds /></div>}
                        </div>
                    <div className="margin-bottom">
                    </div>
              
                    </div>
            </section>
        );
    }
}

export default Projects; 