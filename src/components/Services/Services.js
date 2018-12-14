import React, { Component } from 'react'; 
import Nav from '../Nav/Nav'; 
import { Button, Image } from 'react-bootstrap'; 
import { connect } from 'react-redux'; 

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            services: [
            {name: 'Small Business', description: 'From online stores to custom web applications, the right solution for your business needs.', image: `${require('./business.jpg')}`}, 
            {name: 'Non-Profit', description: `Revamp your organization's website and show off your latest work.`, image: `${require('./nonprofit.jpg')}`}, 
            {name: 'Academic', description: 'Build digital research tools or highlight your latest project with a public platform.', image: `${require('./academic.jpg')}`},
            {name: 'Individuals', description: 'Stand out with a beautiful professional resume or portfolio website.', image: `${require('./individual2.jpg')}`},
        ]
        }
    }
    navTo = (service) => {
        // TO-DO: build a component for each page. 
        // send the name of the service to redux. 
        // send the user to a services info page. that page will render whatever component matches the one in redux 
        this.props.dispatch({type: 'SET_SERVICE_TO_VIEW', payload: service.name});
        this.props.history.push('/more-info')
    }
    render(){
        return(
            <section className="jumbotron text-center white">
                <Nav/>
                <div className="margin-top">
                <h2>What are you here for?</h2>
        {/* container for services divs */}
                <div className="flex-box">
                {this.state.services.map((service, i) => {
                    return (
                    <div className="services-div" key={i}>
                      <h3>{service.name}</h3>
                      <Image width="250" height="250" src={service.image} alt={service.name}/>
                      <p>{service.description}</p>
                    <Button bsStyle="info" onClick={()=>this.navTo(service)}>Learn More</Button>
                    </div>
                    );
                })}
                    
                </div>
                </div>
            </section>
        );
    }
}
export default connect()(Services); 