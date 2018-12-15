import React, {Component} from 'react'; 
import { Grid, Row, Col, Button } from 'react-bootstrap'; 
import Nav from '../Nav/Nav'; 


class Projects extends Component {
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
    render(){
        let isDesktop = this.state.isDesktop;
        return(
            <section className="main">
            <Nav/>
            <Grid>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <h2>Projects</h2>
                    </Col>
                    {isDesktop ? (<Col xs={12} md={6} lg={8}>
                        <img src={require('./apple.jpg')} height="500px" alt="computer" responsive/>
                    </Col>) : (<div></div>)}
                </Row>
                <Row>
                    <div className="row-padding"></div>
                </Row>
                <Row>
                    <Col xs={12} md={10} lg={8}>
                        <h3>I've worked with clients to build e-Commerce sites, professional resume sites, and web portfolios for community-oriented projects.</h3>
                        <img src={require('../images/home.png')}  alt="cc designs homepage" className="relative" responsive/>
                    </Col>
                </Row>
                <Row>
                    <div className="row-padding"></div>
                </Row>
                <Row>
                    <Col xs={12} md={2} lg={4}>
                    </Col>
                    <Col xs={12} md={10} lg={8}>
                        <h3>I've also built stand-alone applications to help small businesses keep track of their clients.</h3>
                        <img src={require('../images/card.png')} alt="fitness meets wellness tracker" className="relative" responsive/>
                    </Col>
                </Row>
                <Row>
                    <div className="row-padding"></div>
                </Row>
                <Row>
                    <Col xs={12} lg={12}>
                       <h3>I strive to build intuitive, beautiful, mobile-friendly applications that are both user-friendly and powerful.</h3>
                    </Col>
                </Row>
                <Row>
                    <div className="row-padding"></div>
                </Row>
                <Row>
                    <Col xs={12} lg={12}>
                       <div className="center">
                        <h3>Interested in working with me? <Button bsSize="large" bsStyle="info" onClick={()=>this.props.history.push('/contact')}>Reach out</Button></h3>
                       </div>
                    </Col>
                </Row>
            </Grid>
            
        </section>
        );
    }
}

export default Projects; 