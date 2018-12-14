import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import Card from '../Card/Card'; 
import Nav from '../Nav/Nav'; 

const mapStateToProps = state => ({
    projects: state.projects.projects
})
class Projects extends Component {
    render(){
        return(
            <section>
            <Nav/>
            <p>I've worked with clients to build e-Commerce sites for small businesses, professional resume sites, and web portfolios community-oriented projects. 
                I've also built stand-alone applications to help small businesses keep track of their clients.</p>
        </section>
        );
    }
}

export default connect(mapStateToProps)(Projects); 