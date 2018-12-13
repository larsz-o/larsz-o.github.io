import React, { Component } from 'react';
import { Col, Row, Grid, Image, Button } from 'react-bootstrap';

class Academic extends Component {
    render() {
        return (
            <Grid className="margin-top">
                <Row>
                <Col xs={12} md={6} lg={4}>
                    <h2>For Research and Academics</h2>
                </Col>
                    <Col xs={12} md={6} lg={8}>
                        <Image src={require('./academic-full.jpg')}  alt="man sitting at a desk" height="500px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="row-padding"></div>
                    </Col>
                </Row>
               <Row>
                 <Col xs={12} md={4} lg={4}>
                        <h2>Let your research shine</h2>
                        <p>Need a public platform to report your latest findings? How about a tool to keep your data organized? Interested in visualizing your analysis or dipping your toe into the digital humanities?</p>
                   </Col>
                   <Col xs={12} md={4} lg={4}>
                        <h2>Keep your sensitive data private</h2>
                        <p>Getting your research online expands its reach and impact, but also potentially compromises your ethical commitments to ensuring the privacy of your research participants and/or students. I'll help ensure the right security and privacy precautions are taken to keep all private information private.</p>
                   </Col>
                   <Col xs={12} md={4} lg={4}>
                 <h2>Lean on digital expertise</h2>
                    <p>You're the expert of your research. I've worked with dozens of faculty to leverage digital media and web applications in their teaching and research. Leave it to me to build, host, and archive your media, data, and platforms.</p>
                 </Col>
               </Row>
               <Row>
                    <div className="row-padding"></div>
               </Row>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Platforms for research projects</h3>
                        <Image src={require('./web.svg')} alt="computer" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Tools for data management</h3>
                        <Image src={require('./database.svg')} alt="database" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Data storytelling</h3>
                    <Image src={require('./presentation.svg')} alt="a presentation" width="100px" height="100px"/>
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
export default Academic; 