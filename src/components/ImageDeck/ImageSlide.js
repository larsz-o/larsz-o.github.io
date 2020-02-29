import React, {Component } from 'react'; 

class ImageSlide extends Component {
  render(){
    return(
      <div className="image-slide column-10" >
      <div className="flex-box-center">
      <img src={require(`../images/${this.props.url.url}`)} className="large-image" alt="product"/>
      </div>
      {this.props.url.link.length > 1 &&<p className="flex-box-center"><a className="mono-link" href={this.props.url.link}>view project</a></p>}
   
    </div>
    );
  }
}
export default ImageSlide; 