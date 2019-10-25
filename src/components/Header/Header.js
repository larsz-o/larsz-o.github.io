import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div>
            <div className="row-padding"></div>
            <div className="flex-box-left">
                <div className="column-1"></div>
                  <div className={`column-5 ${this.props.display}`}>
                  <a href="/#/"><img src={require('../images/IMG_0968.JPG')} alt="Lars headshot" height="300px" className="bio-img"/></a>
                  </div>
                  <div className="column-5">
                  <h2 className="name-header">Lars Mackenzie, PhD</h2>
                      <h3 className="subheading">full-stack web developer + designer</h3>
                      <div className={`flex-box ${this.props.display}`} >
                          
                      <a href="https://drive.google.com/file/d/13_9AwJilmZZ7fJQ8KKfjGt2dEhppb_M_/view?usp=sharing" target="_blank" rel="noopener noreferrer"><div className="button"><h4>Resume</h4></div></a>
                      <a href="mailto:larsmackenzie@gmail.com"><div className="button"><h4>Contact</h4></div></a>
                         
                  </div>
                  <div className="column-1"></div>
                  </div>
                  </div>
                  </div>
        )
    }
}
export default Header; 