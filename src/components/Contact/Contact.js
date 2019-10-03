import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true
        }
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate = () => {
        this.setState({
            isDesktop: window.innerWidth >= 768
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
           <div>
                <div className="flex-box-between baseline">
                       {isDesktop? (<div className="column-5">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>):(<div className="column-5">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>)} 
                       {isDesktop ? (<div className="nav column-5">
                            <div className="flex-box-between"><h4 className="space"><a className="white" href="/">About</a></h4>
                            <h4 className="space"><a className="white" href="/#/projects">Projects</a></h4>
                            <h4 className="space"><a className="white" href="/#/contact">Contact</a></h4></div>
                        </div>):(<div className="nav column-5">
                            <div className="flex-box-between"><h4 className="space"><a className="white" href="/">About</a></h4>
                            <h4 className="space"><a className="white" href="/#/projects">Projects</a></h4>
                            <h4 className="space"><a className="white" href="/#/contact">Contact</a></h4></div>
                        </div>)} 
                    </div>
                   
                    <div className="column-12 flex-box-center margin-top">
                        <div className="gray column-8 flex-box-center">
                        <iframe title="Moss popcorn" src="https://giphy.com/embed/l0IsIZw8doJm3ysRq" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        </div>
                  
                    </div>
                    <div className="column-12 flex-box-center margin-top">
                       <div className="button"><h3><a href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">send me an email</a></h3></div>
                    </div>
           </div>
        );
    }
}
export default Contact; 