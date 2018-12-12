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
            <section className="jumbotron text-center white">
            <Nav/>
            <p>I've worked with clients to build e-Commerce sites for small businesses, professional resume sites, and web portfolios community-oriented projects. I've also built stand-alone applications to help small businesses keep track of their clients.</p>
            <div className="album py-5 bg-light">
             {/* change how this is displayed --  */}
                <div className="container flex-box">
                    <h2>Projects</h2>
                    <div className="flex-box-cards">
                        {this.props.projects.map((project, i) => {
                            return (
                                <Card key={i} project={project} history={this.props.history}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default connect(mapStateToProps)(Projects); 