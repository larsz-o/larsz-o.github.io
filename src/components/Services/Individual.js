import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';

class Individual extends Component {
    render() {
        return (
            <Grid className="margin-top main">
                <Row>
                <Col xs={12} md={6} lg={4}>
                    <h2>For Individuals</h2>
                </Col>
                    <Col xs={12} md={6} lg={8}>
                        <Image src={require('./businesswoman.jpg')}  alt="woman working" height="500px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="row-padding"></div>
                    </Col>
                </Row>
                <Row>
                 <Col xs={12} md={4} lg={4}>
                        <h2>Present your best self</h2>
                        <p>Stand out in the crowd with a beautiful custom portfolio website that won't look like everyone else's cookie-cutter template.</p>
                   </Col>
                   <Col xs={12} md={4} lg={4}>
                        <h2>Showcase your work</h2>
                        <p>Need a platform to show off your projects? I'll build you a site that fits your needs, whether it's a multimedia gallery for your video work or a resume site for a job search.</p>
                   </Col>
                   <Col xs={12} md={4} lg={4}>
                        <h2>Connect with others</h2>
                        <p>I'll build you custom contact forms and help you increase engagement with your work.</p>
                   </Col>
               </Row>
               <Row>
                    <div className="row-padding"></div>
               </Row>
               <Row>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Professional Portfolios</h3>
                        <Image src={require('./gallery.svg')} alt="portfolio" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Resumes and CVs</h3>
                        <Image src={require('./resume.svg')} alt="resume" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Blogs and Social Media</h3>
                    <Image src={require('./suspect.svg')} alt="blogging" width="100px" height="100px"/>
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
                        <Button onClick={()=>this.props.history.push('/contact')} bsSize="large" bsStyle="info">Let's Talk</Button>
                    </Col>
                </Row>
            </Grid>

        );
    }
}
export default Individual; 