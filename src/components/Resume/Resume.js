import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import Nav from '../Nav/Nav';


class Projects extends Component {
    render() {
        return (
            <section>
                <Nav />
                <div className="container flex-box-cards">
                    <h2>About Me</h2>
                    <p>I am a full-stack software developer with a background in research, higher education, and social services. I love creating technology that can improve people's lives - from automating tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized data.</p>
                    <p>For the past six and a half years, I've been pursuing a PhD at the University of Minnesota, where I studied how software and data-driven decision-making impacts marginalized people.</p>
                    <p>During this time, I was deeply involved with educational technology: helping faculty to integrate digital technology into their research and teaching, and training students to produce digital media projects. I've tackled big problems in this work, like figuring out how to archive hundreds of student-made video projects while protecting their privacy, or how to best highlight research insights from a qualitative study in a narrative digital map.</p>
                    <p>I'm passionate about helping build software for people who need custom websites or web applications but who don't always have access to it -- small business owners, non-profit organizations, researchers, students, artists, and entreprenuers.</p>
                </div>
            </section>
        );
    }
}

export default connect()(Projects); 