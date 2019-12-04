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
            <footer className="flex-box-between no-wrap">
                <p>Lars Mackenzie &copy;{this.state.year}</p>
                <p><a href="https://github.com/larsz-o/larsz-o.github.io">page revision history</a></p>
            </footer>
        )
    }
}
export default Footer;