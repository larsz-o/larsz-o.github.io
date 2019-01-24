import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button, Modal } from 'react-bootstrap';
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
            isDesktop: true,
            success: false
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
    handleClose = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            success: false,
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/contact',
            data: this.state
        }).then((response) => {
            if (this.state.isDesktop) {
                this.setState({
                    success: true
                });
            } else {
                alert('Thank you for your note! I will reply as soon as I can.');
            }
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
            this.setState({
                ...this.state,
                name: '',
                email: '',
                subject: '',
                message: ''
            })
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
                {isDesktop ? (<form onSubmit={(event) => this.handleSubmit(event)} className="contact-form">
                    <h2 className="center">Let's connect!</h2>
                    <div className="headline"><a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer" ><img src={require('../images/twitter-min.png')} height="50px" alt="twitter icon" /></a>
                        <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer" ><img src={require('../images/linkedin2.png')} height="50px" alt="linkedin icon" /></a>
                        <a href="https://github.com/larsz-o" target="_blank" rel="noopener noreferrer"><img src={require('../images/Octocat-min.png')} height="50px" alt="github icon" /></a></div>
                        <h3>Send me an <a href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">email!</a></h3>
                    {/* <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(event) => this.handleChangeFor(event, 'name')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={(event) => this.handleChangeFor(event, 'email')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" value={this.state.subject} onChange={(event) => this.handleChangeFor(event, 'subject')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel><br />
                        <FormControl componentClass="textarea" rows={10} value={this.state.message} onChange={(event) => this.handleChangeFor(event, 'message')} required />
                    </FormGroup>
                    <div className="center">
                        <div class="g-recaptcha" data-sitekey="6LeZTowUAAAAAIq7N6vqBAibgz4joIcpBT1NShel"></div>
                        <Button bsSize="large" type="submit" bsStyle="primary">Submit</Button>
                    </div> */}
                   
                </form>
                ) : (<form onSubmit={(event) => this.handleSubmit(event)} className="full-width">
                    <h2 className="center">Let's connect!</h2>
                    <div className="headline"><a href="https://twitter.com/larszmac" target="_blank" rel="noopener noreferrer"><img src={require('../images/twitter-min.png')} height="50px" alt="twitter icon" /></a>
                        <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin2.png')} height="50px" alt="linkedin icon" /></a>
                        <a href="https://github.com/larsz-o" target="_blank" rel="noopener noreferrer"><img src={require('../images/Octocat-min.png')} height="50px" alt="github icon" /></a></div>
                        <h3>Send me an <a href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">email!</a></h3>
                    {/* <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(event) => this.handleChangeFor(event, 'name')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={(event) => this.handleChangeFor(event, 'email')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" value={this.state.subject} onChange={(event) => this.handleChangeFor(event, 'subject')} required />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel><br />
                        <FormControl componentClass="textarea" rows={10} value={this.state.message} onChange={(event) => this.handleChangeFor(event, 'message')} required />
                    </FormGroup>
                    <div className="center">
                        <div class="g-recaptcha" data-sitekey="6LeZTowUAAAAAIq7N6vqBAibgz4joIcpBT1NShel">
                        <Button bsSize="large" type="submit" bsStyle="primary">Submit</Button>
                    </div>
                    </div> */}
                </form>)}
                <Modal show={this.state.success} onHide={(event) => this.handleClose(event)}>
                    <Modal.Header>
                        <h3>Success!</h3>
                    </Modal.Header>
                    <Modal.Body className="center"><p className="skills-list">Message sent! Check your inbox for a confirmation email.</p><img src={require('../images/emails.gif')} alt="email gif" /></Modal.Body>
                    <div className="center spacing"><Button bsStyle="info" onClick={(event) => this.handleClose(event)}>Close</Button></div>
                </Modal>

            </section>
        );
    }
}
export default Contact; 