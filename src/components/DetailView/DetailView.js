import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap'; 

const mapStateToProps = state => ({
    project: state.projects.currentProject
});
class DetailView extends Component {
    render() {
        let empty = Object.keys(this.props.project).length === 0;
        let content;
        if(empty){
            content = (<div className="padding-top">
                <div className="flex-box">
                <h3>Uh oh, nothing to see here.</h3>
                </div>
             <div className="padding flex-box">
                <a href="/#/" className="btn btn-primary">Return Home</a>
            </div>
            </div>); 
        } else {
            content = (<main role="main" className="margin-bottom">
            <section className="jumbotron text-center white">
                <div className="container flex-box">
                    <h2>{this.props.project.title}</h2>
                    <p className="lead">{this.props.project.summary} <br />
                        Check out the code respository on: <a href={this.props.project.githubURL}><img src="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/github.png" alt="github icon" /></a>
                    </p>
                    <Image src={this.props.project.image} alt={this.props.project.title} id="screenshot"/>
                </div> 
                <div className="padding">
                <a href="/#/" className="btn btn-primary">Back</a>
                </div>
            </section>
        </main>);
        }
        return (
            content
        );
    }
}
export default connect(mapStateToProps)(DetailView); 