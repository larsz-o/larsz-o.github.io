import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import Nav from '../Nav/Nav'; 

const mapStateToProps = state => ({
    technologies: state.technologies
})
class Projects extends Component {
    render() {
        return (
            <section className="jumbotron text-center white">
                <Nav/>
                <div className="container flex-box">
                <h2>About Me</h2>
                <p>I am a full-stack software developer with a background in research, higher education,
                and social services.<br /> I love creating technology that can improve people's lives - from automating
                tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized data.</p>
                    <h2>Technologies</h2>
                </div>
                <div className="container flex-box">
                    {this.props.technologies.map((tech, i) => {
                        return (
                            <div className="icon-div" key={i}>
                                <Image src={tech.icon} height={100} width={100} alt={tech.name} responsive />
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps)(Projects); 