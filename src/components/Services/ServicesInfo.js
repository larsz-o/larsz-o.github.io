import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import SmallBusiness from './SmallBusiness'; 
import Academic from './Academic'; 
import Individual from './Individual'; 
import NonProfit from './Nonprofit'; 
import Nav from '../Nav/Nav'; 
import { Button } from 'react-bootstrap'; 
const mapStateToProps = state => ({
    services: state.services.services
})
class ServicesInfo extends Component {
    render(){
        return(
            <section className="jumbotron text-center white">
                <Nav/>
                {this.props.services === 'Small Business' && <SmallBusiness history={this.props.history}/>}
                {this.props.services === 'Non-Profit' && <NonProfit history={this.props.history}/>}
                {this.props.services === 'Academic' && <Academic history={this.props.history}/>}
                {this.props.services === 'Individuals' && <Individual history={this.props.history}/>}
                {this.props.services === '' && <div className="margin-top">
                            <p>Uh oh. Nothing to see here. <br/><br/><Button bsStyle="warning" onClick={()=>this.props.history.push('/')}>Return Home</Button></p>
                </div>}
            </section>
        );
    }
}
export default connect(mapStateToProps)(ServicesInfo); 