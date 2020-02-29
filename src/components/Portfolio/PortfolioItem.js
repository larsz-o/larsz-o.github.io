import React, { Component } from 'react';
import ImageDeck from '../ImageDeck/ImageDeck'; 

class PortfolioItem extends Component{
    render(){
        return(
            <div className="flex-box-center column-12 portfolio-area">
                {/* begin card content */}
                <div className="column-12 flex-box-evenly">
                    <div className="column-10">
                    <h3 className="greeting">{this.props.project.title}</h3>
                    <p>{this.props.project.description}</p>
                    <ImageDeck imgUrls={this.props.project.images} className="column-12" />
                    </div> 
                </div>
            </div>
        )
    }
}
export default PortfolioItem;