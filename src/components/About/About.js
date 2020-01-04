import React, { Component } from 'react';
import Header from '../Header/Header';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Divider from '../Divider/Divider';
import Footer from '../Footer/Footer';

class About extends Component {
    render() {

        return (
            <div>
            <div className="main">
                <Header display={true}/>
                <div className="row-padding"></div>
                <Divider />
                <Bio/>
                <Divider />
                <Projects/>
                <div className="row-padding"></div>
            </div>
            <Footer/>
            </div>
        );
    }
}

export default About; 