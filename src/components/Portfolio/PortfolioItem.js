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
                    <ImageDeck imgUrls={this.props.project.images} description={this.props.project.description}/>
                    {/* <img src={require(`../images/${this.props.project.image}`)} className="large-image" alt={this.props.project.title}/> */}
                    
                    </div> 
                </div>
            </div>
        )
    }
}
export default PortfolioItem;