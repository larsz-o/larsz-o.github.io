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
            {name: 'Individuals', description: 'Stand out with a beautiful professional resume or portfolio website.', image: `${require('./individual.jpg')}`},
        ]
        }
    }
    navTo = (service) => {

    }
    render(){
        return(
            <section className="jumbotron text-center white">
                <Nav/>
                <div className="margin-top">
                <h2>What Can I Build For You?</h2>
                {/*   Small Business Tools 
                            Small Business Online Stores
                            WordPress customization 
                            Customized web applications to keep track of business needs 
                        Non-Profit
                            Research Project Portfolios 
                            Fundraising Sites 
                            WordPress customization 
                        Professional Resume Websites
                    <p>I've worked with clients to build e-Commerce sites for small businesses, professional resume sites, and web portfolios community-oriented projects. 
                        I've also built stand-alone applications to help small businesses keep track of their clients.</p> */}
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