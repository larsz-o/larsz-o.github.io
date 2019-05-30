import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

class fourOhFour extends Component {
    render() {
        return (
            <Grid class="main">
                <Row>
                    <h2 className="name-header">Lars Mackenzie</h2>
                    <h4 className="subheading">academic technologist + web developer</h4>
                </Row>
                <div class="center main margin-top">
                    <h3>I'm very sorry to say that the page you are looking for cannot be found.</h3>
                    <h4>Time for this little puppy to go <a href="https://www.larsmackenzie.com">home.</a></h4>
                    <img src={require('../images/sadpug.jpeg')} class="responsive-img" alt="a very sad pug" />
                </div>
            </Grid>
        );
    }
}
export default fourOhFour; 