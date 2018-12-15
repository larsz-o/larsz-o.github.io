import React, { Component } from 'react';
import { Image, Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'; 
import Nav from '../Nav/Nav'; 

class HomePage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                    <section className="main">
                        <Grid>
                            <Row>
                            <Col xs={12} lg={6}>
                                <Image src={require('../images/book.jpg')} alt="computer" height="400" rounded responsive/>
                            </Col>
                            <Col xs={12} lg={6}>
                                <h2 className="col-md-4">Hello! I'm a full-stack software developer and I can help you build your professional or organizational web presence.</h2>
                                <div className="center"><Button bsSize="large" bsStyle="info" onClick={()=>this.props.history.push('/services')}>Learn More</Button></div> 
                            </Col>
                            </Row>
                        </Grid>
                    </section>
           
            </div >
        );
    }
}
export default connect()(HomePage); 