import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Resume extends Component {
    render() {
        return (
            <section className="main">
                <Nav/>
                <Grid>
                    <Row>
                        <Col xs={12} md={6} lg={8}>
                        <img src={require('../images/code.jpg')} height="500px" alt="computer" responsive/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                        <h3>Check out my <a className="link" href={require('../images/Mackenzie_Resume.pdf')}>resume</a> (last updated January 2019)</h3>
                        </Col>
                    </Row>
                </Grid>
                
            </section>
        );
    }
}
export default Resume; 