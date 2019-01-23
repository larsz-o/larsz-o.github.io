import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Grid, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true
        }
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate = () => {
        this.setState({
            isDesktop: window.innerWidth > 1024
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <section className="main">
                <Nav />
                <Grid>
                    <Row className="center">
                        <Col xs={12} md={6} lg={8}>
                            {isDesktop ? (<img src={require('../images/code.jpg')} height="500px" alt="computer" responsive />) : (<img src={require('../images/code.jpg')} width="300px" alt="computer" responsive />)}
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <h3>Download my <a className="link" href={require('../images/Mackenzie_Resume.pdf')}>resume</a></h3>
                            <p>Last updated January 2019</p>
                            <Row>
                                <Col xs={12} md={12} lg={12}>
                                    <h3>Or read about my <Link to="/resume#workshops">workshops and trainings,</Link> <Link to="/resume#tech">technical skills,</Link> <Link to="/resume#presentations">presentations</Link>, <Link to="/resume#publications">publications,</Link><Link to="/resume#awards"> and awards.</Link></h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div id="workshops">
                    workshops
                        </div>
                    </Row>
                    {/* To do: add workshops, trainings, talks, paper, etc.  */}
                </Grid>

            </section>
        );
    }
}
export default Resume; 