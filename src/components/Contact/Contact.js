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
            product: '',
            subject: '',
            message: ''
        }
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
            alert('Message sent! Check your inbox for a confirmation email.')
            this.setState({
                name: '',
                email: '',
                product: '',
                subject: '',
                message: ''
            }); 
        }).catch((error) => {
            console.log('Error posting confirmation', error); 
        })
    }
    render() {
        return (
            <section>
                <Nav/>
                <form onSubmit={this.handleSubmit} className="contact-form">
                <h3 className="center">Contact Lars</h3>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={(event) => this.handleChangeFor(event, 'name')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={(event) => this.handleChangeFor(event, 'email')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Are you interested in particular product?</ControlLabel>
                        <FormControl componentClass="select" placeholder="select one" value={this.state.product} onChange={(event) => this.handleChangeFor(event, 'product')}>
                            <option value=""></option>
                            <option value="Website Design (organization or business)">Website Design (organization or business)</option>
                            <option value="Professional Portfolio (individual)">Professional Portfolio or Resume Site (individual)</option>
                            <option value="Data Storytelling and Management Tools">Data Storytelling and Management Tools</option>
                            <option value="Customer/Stakeholder Management Tools">Customer/Stakeholder Management Tools</option>
                            <option value="Other">Other</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" value={this.state.subject} onChange={(event) => this.handleChangeFor(event, 'subject')} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel>
                        <ControlLabel>Please be as detailed as possible to help me understand your needs. Do you have a deadline you're working with? Do you need a project built from scratch or do you have an existing product that needs improvement?</ControlLabel>
                        <FormControl componentClass="textarea" rows={10} value={this.state.message} onChange={(event) => this.handleChangeFor(event, 'message')} />
                    </FormGroup>
                    <div className="center">
                        <Button bsStyle="large" type="submit" bsStyle="primary">Submit</Button>
                    </div>
                   
                </form>


            </section>
        );
    }
}
export default Contact; 