import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import { Image, Button } from 'react-bootstrap';
import axios from 'axios'; 
import { connect } from 'react-redux'; 
import Nav from '../Nav/Nav'; 

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            technologies: [],
        }
    }
    componentDidMount(){
        this.getProjects();
    }
    getProjects = () => {
        axios({
            method: 'GET', 
            url: '/projects'
        }).then((response) => {
            this.props.dispatch({type: 'SET_PROJECTS', payload: response.data});
            this.getTech(); 
        }).catch((error) => {
            console.log('Error getting projects', error);
        })
    }
    getTech  = () => {
        axios({
            method: 'GET', 
            url: '/projects/technologies'
        }).then((response) => {
            this.props.dispatch({type: 'SET_TECH', payload: response.data});
        }).catch((error) => {
            console.log('Error getting technologies', error);
        })
    }
    render() {
        return (
            <div>
                <main role="main">
                    <section className="jumbotron white">
                        <Nav/>
                        <div className="flex-box margin-top">
                            <div className="col-md-4">
                                <Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/lars.jpg" alt="Lars headshot" height="350" width="400" circle/>
                            </div>
                            <h2 className="col-md-4">Hello! I'm a full-stack software developer and I can help you build your professional or organizational web presence.</h2>
                        </div>
                        <div className="flex-box">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4 flex-box"><Button bsSize="large" bsStyle="info" onClick={()=>this.props.history.push('/services')}>Learn More</Button>
                    </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div >
        );
    }
}
export default connect()(HomePage); 