import React, {Component } from 'react'; 

class ImageSlide extends Component {
  render(){
    return(
      <div className="image-slide column-10" >
      <img src={require(`../images/${this.props.url.url}`)} className="large-image" alt="product"/>
      <p>{this.props.description}</p>
    </div>
    );
  }
}
export default ImageSlide; 