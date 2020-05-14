import React, { Component } from 'react';
import Social from '../Social/Social';
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
            <footer>
                <Social/>
                <p><span>Lars Mackenzie Designs&nbsp;&nbsp;</span> <span>&copy;2016 - {this.state.year}</span> </p>
            </footer>
        )
    }
}
export default Footer;
