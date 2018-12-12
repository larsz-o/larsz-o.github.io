import React, { Component } from 'react'; 
import Nav from '../Nav/Nav'; 

class Services extends Component {
    render(){
        return(
            <section className="jumbotron text-center white">
                <Nav/>
                <div className="margin-top">
                list out some services here (small business tools, community/research project portfolios, professional resume sites, e-Commerce)
                    <p>I've worked with clients to build e-Commerce sites for small businesses, professional resume sites, and web portfolios community-oriented projects. 
                        I've also built stand-alone applications to help small businesses keep track of their clients.</p>
                </div>
            </section>
        );
    }
}
export default Services; 