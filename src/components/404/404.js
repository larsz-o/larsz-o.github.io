import React, { Component } from 'react';

class fourOhFour extends Component {
    render() {
        return (
            <div class="main">
                  <div className="flex-box-between baseline heading">
                        <div className="column-4" id="top">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>
                        <div className="flex-box-between nav column-6">
                            <h4 className="space"><a href="/">About</a></h4>
                            <h4 className="space" onClick={() => this.reset()}>Projects</h4>
                            <h4 className="space"><a href="mailto:larsmackenzie@gmail.com?body=Hi Lars!">Contact Me</a></h4>
                        </div>
                    </div>
                <div class="center main margin-top error">
                    <div class="spacer"></div>
                    <h3>I'm very sorry to say that the page you are looking for cannot be found.</h3>
                    <img src={require('../images/sadpug.jpeg')} class="responsive-img" alt="a very sad pug" />
                    <h4 class="breathing-room">Time for this little puppy to go <a href="/#/">home.</a></h4>
                </div>
            </div>
        );
    }
}
export default fourOhFour; 