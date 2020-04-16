import React, { Component } from 'react';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            year: ''
        }
    }
    componentDidMount(){
        let year = new Date().getFullYear();
        this.setState({
            year: year
        })

    }
    render(){
        return(
            <footer className="flex-box flex-end no-wrap">
                <p className="greeting"><span>Lars Mackenzie Designs&nbsp;&nbsp;&nbsp;</span> <span>&copy;2016 - {this.state.year}</span></p>
            </footer>
        )
    }
}
export default Footer;
