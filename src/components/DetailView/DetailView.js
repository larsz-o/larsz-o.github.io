import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    project: state
});
class DetailView extends Component {
    render() {
        return (
            <main role="main">
                <section className="jumbotron text-center white">
                    <div className="container flex-box">
                        <h2>{this.props.project.title}</h2>
                        <p className="lead">{this.props.project.summary} <br />
                            Check out the code respository on: <a href={this.props.project.githubURL}><img src="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/github.png" alt="github icon" /></a>
                        </p>
                        <img src={this.props.project.image} alt={this.props.project.title} />
                    </div>
                    <a href="/#/" className="btn btn-secondary my-2">Back</a>
                </section>
            </main>

        );
    }
}
export default connect(mapStateToProps)(DetailView); 