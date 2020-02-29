import React, { Component } from 'react';
import ImageSlide from './ImageSlide';

class ImageDeck extends Component {
    constructor (props) {
        super(props);
        this.state = {
          currentImageIndex: 0
        };
      }

      previousSlide = () => {
        const lastIndex = this.props.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
        console.log(index); 
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide = () => {
        const lastIndex = this.props.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
    render() {
        
        return (
            <div className="carousel">
            {/* only display the arrows if there is more than 1 picture to show */}
            {this.props.imgUrls.length > 1 ? (<div className="column-12 padding">
                  <div className=" flex-box-between">
                <div className="flex-column flex-center"> <img src={require('../images/icons/back.svg')} className="nav-arrow" alt="back-arrow" height="25px" onClick={this.previousSlide}/></div>
               <div className="flex-column flex-center"><img src={require('../images/icons/back.svg')} className="nav-arrow rotate" alt="forward arrow" height="25px" onClick={this.nextSlide}/></div>
            </div>
            <div className="flex-box-center">
                <ImageSlide url={ this.props.imgUrls[this.state.currentImageIndex] } />
                </div>
          
            </div>):(   <div className="flex-box-center"><ImageSlide url={ this.props.imgUrls[this.state.currentImageIndex] } /></div>)}

               
                
            </div>
        );
    }
}
export default ImageDeck; 