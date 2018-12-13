import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';

class NonProfit extends Component {
    render() {
        return (
            <Grid className="margin-top">
                <Row>
                <Col xs={12} md={6} lg={4}>
                    <h2>For Non-Profits</h2>
                </Col>
                    <Col xs={12} md={6} lg={8}>
                        <Image src={require('./nonprofit-full.jpg')}  alt="people working around a table" height="500px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="row-padding"></div>
                    </Col>
                </Row>
                <Row>
                 <Col xs={12} md={4} lg={4}>
                        <h2>Reach the communities and audiences that matter</h2>
                        <p>You're already doing great work, but are you reaching the people you need to be reachign? A great website makes all the difference. I'll modernize your existing web presence or build you a new site from scratch to amplify your message and make it shine.</p>
                   </Col>
                   <Col xs={12} md={4} lg={4}>
                        <h2>Automate your most tedious processes</h2>
                        <p>Still entering your reports or contacting your stakeholders manually? You have more important work to do. I've built custom solutions for common operations so you can spend more time on the work that matters and less on paperwork.</p>
                   </Col>
                   <Col xs={12} md={4} lg={4}>
                        <h2>Give your reporting a makeover</h2>
                        <p>Sitting on piles of data you don't know what to do with? I can help you make sense of heaps of information and help you present it in a meaningful way to your key stakeholders.</p>
                   </Col>
               </Row>
               <Row>
                    <div className="row-padding"></div>
               </Row>
               <Row>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Website Design and Modernization</h3>
                        <Image src={require('./web.svg')} alt="computer" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Data Storytelling</h3>
                        <Image src={require('./presentation.svg')} alt="a presentation" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Operations Management Tools</h3>
                    <Image src={require('./support.svg')} alt="operations management" width="100px" height="100px"/>
                    </Col>
                </Row>
                <Row>
                    <div className="row-padding"></div>
                </Row>
                <Row>
                    <div className="row-padding"></div>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                    <h2>Ready to get started?</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Button bsSize="large" bsStyle="info">Let's Talk</Button>
                    </Col>
                </Row>
            </Grid>

        );
    }
}
export default NonProfit; 