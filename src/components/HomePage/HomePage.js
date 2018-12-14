import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux'; 
import Nav from '../Nav/Nav'; 

class HomePage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                    <section>
                        <div className="flex-box margin-top">
                            <div className="col-md-4">
                                <Image src="https://raw.githubusercontent.com/larsz-o/larsz-o.github.io/master/src/static/lars.jpg" alt="Lars headshot" height="350" rounded/>
                            </div>
                            <h2 className="col-md-4">Hello! I'm a full-stack software developer and I can help you build your professional or organizational web presence.</h2>
                        </div>
                        <div className="flex-box">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4 flex-box"><Button bsSize="large" bsStyle="info" onClick={()=>this.props.history.push('/services')}>Learn More</Button>
                    </div>
                        </div>
                    </section>
           
            </div >
        );
    }
}
export default connect()(HomePage); 