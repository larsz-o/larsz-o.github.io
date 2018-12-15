import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';

class SmallBusiness extends Component {
    render() {
        return (
            <Grid className="margin-top main">
                <Row>
                <Col xs={12} md={6} lg={4}>
                    <h2>For Small Businesses</h2>
                </Col>
                    <Col xs={12} md={6} lg={8}>
                        <Image src={require('./apron-full.jpg')}  alt="worked in an apron" height="500px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="row-padding"></div>
                    </Col>
                </Row>
                <Row>
                 <Col xs={12} md={6} lg={6}>
                        <h2>Showcase your products</h2>
                        <p>Want to finally put some of your products in an online store? Need to modernize your existing website to make it mobile responsive? Interested in reaching new customers?</p>
                   </Col>
                   <Col xs={12} md={6} lg={6}>
                        <h2>Automate your most tedious processes</h2>
                        <p>Still entering your sales or contacting your customers manually? The last thing a small business owner has time for is paperwork. I've built custom solutions for small businesses and entrepeneurs so they can spend more on their craft.</p>
                   </Col>
               </Row>
               <Row>
                    <div className="row-padding"></div>
               </Row>
               <Row>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Online Stores</h3>
                        <Image src={require('./shopping-cart.svg')} alt="shopping cart" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Website Modernization</h3>
                        <Image src={require('./online-shop.svg')} alt="online store" width="100px" height="100px"/>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                    <h3>Customer Management Tools</h3>
                    <Image src={require('./telemarketer.svg')} alt="customer management" width="100px" height="100px"/>
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
export default SmallBusiness; 