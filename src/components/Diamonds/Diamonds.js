import React, { Component } from 'react'; 

class Diamonds extends Component {
    render(){
        return (
            <div className="center">
                <img src={require('../images/diamond1.png')} alt="diamond"/><img src={require('../images/diamond1.png')} alt="diamond"/><img src={require('../images/diamond1.png')} alt="diamond"/>
            </div>
        )
    }
}
export default Diamonds; 