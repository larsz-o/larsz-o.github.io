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
                <p className="greeting">Lars Mackenzie &copy;{this.state.year}</p>
            </footer>
        )
    }
}
export default Footer;