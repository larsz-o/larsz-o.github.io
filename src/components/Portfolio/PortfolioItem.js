import React, { Component } from 'react';

class PortfolioItem extends Component{
    render(){
        return(
            <div className="flex-box-center column-12 portfolio-area">
                {/* begin card content */}
                <div className="column-10 flex-box-evenly">
                    <div className="column-6">
                    <img src={this.props.project.image} className="portfolio-image" alt={this.props.project.title}/>
                    </div>
                    <div className="column-4">
                    <h3>{this.props.project.title}</h3>
                    <div className="flex-box-center">
                    {this.props.project.demo ? (<a href={this.props.project.link}><div className="button grayed-btn">Project Demo</div></a>):(
                        <a href={this.props.project.link}><div className="button grayed-btn">View Client</div></a>)}
                    </div>
                    </div>    
                </div>
            </div>
        )
    }
}
export default PortfolioItem;