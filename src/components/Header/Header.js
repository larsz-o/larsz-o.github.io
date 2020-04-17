import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className={`image-${this.props.display}`}>
                    <div className="row-padding"></div>
                    <div className="flex-box-left">
                        <div className="column-1"></div>
                        {this.props.display && <div className={`column-5`}>
                            <a href="/#/"><img src={require('../images/lars-dark.png')} alt="Lars headshot" height="300px" className="bio-img" /></a>
                        </div>}
                        {this.props.display && <div className="column-1"></div>}
                        <div className="column-5">
                            <a className="plain-link" href="/"><h2 className="name-header">Lars Mackenzie, PhD</h2></a>
                            <h3 className="subheading">learning designer + web developer </h3>
                            <div className={`flex-box flex-evenly flex-stretch column-12 ${this.props.display}`} >
                            </div>


                            <div className="column-1"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Header; 
