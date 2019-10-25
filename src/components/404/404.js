import React, { Component } from 'react';
import Header from '../Header/Header';

class fourOhFour extends Component {
    render() {
        return (
            <div class="main">
                 <Header display={'none'}/>
                <div class="center main margin-top error column-12">
                    <div class="spacer"></div>
                    <h3>I'm very sorry to say that the page you are looking for cannot be found.</h3>
                    <img src={require('../images/sadpug.jpeg')} className="square" alt="a very sad pug" />
                    <h4 class="breathing-room">Time for this little puppy to go <a href="/#/">home.</a></h4>
                </div>
            </div>
        );
    }
}
export default fourOhFour; 