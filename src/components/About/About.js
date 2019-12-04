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
                <Bio/>
                <Divider />
                <Projects/>
                <div className="row-padding"></div>
              

            </div>
        );
    }
}

export default About; 