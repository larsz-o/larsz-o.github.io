import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: [
                { id: 1, name: 'Basic', description: 'A single-page portfolio site with up to 3 customizable sections (e.g. Bio, Resume, Blog)', features: ['Responsive design', 'One headshot image', 'Editing control over content with admin portal'], price: 75 },
                { id: 2, name: 'Standard', description: 'A single-page portfolio site with up to 4 customizable sections (e.g. Bio, Resume, Blog, Examples of Work).', features: ['Responsive design', 'Choice of color scheme', 'Custom fonts', 'One headshot image', 'Up to 3 additional images', 'Editing control over content with admin portal', '1 revision'], price: 100 },
                { id: 3, name: 'Deluxe', description: 'A multi-page portfolio site with 5+ customizable sections (e.g. Bio, Resume, Contact, Examples of Work, Blog).', features: ['Responsive design', 'Choice of color scheme', 'Custom fonts', 'One headshot image', 'Up to 3 additional images', 'Editing control over content with admin portal', 'Custom contact form', '2 revisions'], price: 150 },
                { id: 4, name: 'Premium', description: 'A multi-page portfolio site with 5+ customizable sections (e.g. Bio, Resume, Contact, Examples of Work, Blog).', features: ['Responsive design', 'Choice of color scheme', 'Custom fonts', 'One headshot image', 'Up to 6 additional images', 'Editing control over content with admin portal', 'Custom contact form', 'Content upload', '3 revisions'], price: 200 },
            ]
        }
    }
    render() {
        return (
            <section className="main">
                <Nav />
                <div className="margin-top">
                    <Grid>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <Image src={require('./clips.jpg')} alt="light bulbs" height="200px" responsive />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <h2 className="center">Portfolio Packages</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="row-padding"></div>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.packages.map((offer, i) => {
                                return (
                                    <Col key={i} xs={12} md={3} lg={3}>
                                        <div className="packages-div">
                                            <h3>{offer.name}</h3>
                                            <p>{offer.description}</p>
                                            <ul>
                                                {offer.features.map((feature, i) => {
                                                    return (
                                                        <li className="left" key={i}>{feature}</li>
                                                    )
                                                })}
                                            </ul>
                                            <h3>${offer.price}</h3>
                                            <Button className="bottom" bsStyle="success" onClick={() => this.purchasePackage(offer)}>Purchase</Button>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>

                    </Grid>

                </div>

            </section>
        )
    }
}
export default connect()(Packages);