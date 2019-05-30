import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

class fourOhFour extends Component {
    render() {
        return (
            <Grid class="main">
                <Row>
                    <a href="/#/"><h2 className="name-header">Lars Mackenzie</h2>
                    <h4 className="subheading">academic technologist + web developer</h4></a>
                </Row>
                <div class="center main margin-top error">
                    <div class="spacer"></div>
                    <h3>I'm very sorry to say that the page you are looking for cannot be found.</h3>
                    <img src={require('../images/sadpug.jpeg')} class="responsive-img" alt="a very sad pug" />
                    <h4 class="breathing-room">Time for this little puppy to go <a href="/#/">home.</a></h4>
                </div>
            </Grid>
        );
    }
}
export default fourOhFour; 