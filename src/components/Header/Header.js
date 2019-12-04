import React, { Component } from 'react';
import Social from '../Social/Social'; 

class Header extends Component {
    render(){
        return(
            <div>
            <div className="row-padding"></div>
            <div className="flex-box-left">
                <div className="column-1"></div>
                  <div className={`column-5 ${this.props.display}`}>
                  <a href="/#/"><img src={require('../images/DSC01757.jpg')} alt="Lars headshot" height="300px" className="bio-img"/></a>
                  </div>
                  <div className="column-1"></div>
                  <div className="column-5">
                  <h2 className="name-header">Lars Mackenzie, PhD</h2>
                      <h3 className="subheading">learning designer + web developer </h3>
                      <div className={`flex-box ${this.props.display}`} >
                          
                      <a href="https://docs.google.com/document/d/13CpnBm968fYaO_TUW_baLE7okG6sEkg_Otq9w0qMEW0/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><div className="button"><h4>Resume</h4></div></a>
                      <a href="mailto:larsmackenzie@gmail.com"><div className="button"><h4>Contact</h4></div></a>
                      <Social/>
                  </div>
         
                
                  <div className="column-1"></div>
                  </div>
                  </div>
                  </div>
        )
    }
}
export default Header; 