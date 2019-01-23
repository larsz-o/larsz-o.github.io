import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import Nav from '../Nav/Nav';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
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
    handleChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }
    handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/contact',
            data: this.state
        }).then((response) => {
            this.sendConfirmation();
        }).catch((error) => {
            console.log('Error submitting form.', error);
            alert('Error submitting contact form. Please try again.');
        })
    }
    sendConfirmation = () => {
        axios({
            method: 'POST',
            url: '/contact/confirmation',
            data: this.state
        }).then((response) => {
            alert('Message sent! I will be in touch shortly. Check your inbox for a confirmation email.')
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }).catch((error) => {
            console.log('Error posting confirmation', error);
        })
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
                {isDesktop ? (<form onSubmit={this.handleSubmit} className="contact-form">
                    <h2 className="center">Let's connect!</h2>
                    <div className="headline"><a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer" ><img src={require('../images/twitter.png')} height="50px" alt="twitter icon"/></a>
                        <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer" ><img src={require('../images/linkedin2.png')} height="50px" alt="linkedin icon"/></a></div>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(event) => this.handleChangeFor(event, 'name')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={(event) => this.handleChangeFor(event, 'email')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" value={this.state.subject} onChange={(event) => this.handleChangeFor(event, 'subject')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel><br />
                        <FormControl componentClass="textarea" rows={10} value={this.state.message} onChange={(event) => this.handleChangeFor(event, 'message')} />
                    </FormGroup>
                    <div className="center">
                        <Button bsSize="large" type="submit" bsStyle="primary">Submit</Button>
                    </div>
                </form>
                ) : (<form onSubmit={this.handleSubmit} className="full-width">
                    <h2 className="center">Let's connect!</h2>
                    <div className="headline"><a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer"><img src={require('../images/twitter.png')} height="50px" alt="twitter icon"/></a>
                        <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin2.png')} height="50px" alt="linkedin icon"/></a></div>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(event) => this.handleChangeFor(event, 'name')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={(event) => this.handleChangeFor(event, 'email')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" value={this.state.subject} onChange={(event) => this.handleChangeFor(event, 'subject')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel><br />
                        <FormControl componentClass="textarea" rows={10} value={this.state.message} onChange={(event) => this.handleChangeFor(event, 'message')} />
                    </FormGroup>
                    <div className="center">
                        <Button bsSize="large" type="submit" bsStyle="primary">Submit</Button>
                    </div>
                </form>)}

            </section>
        );
    }
}
export default Contact; 