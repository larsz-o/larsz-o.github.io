import React, {Component} from 'react';

class Bio extends Component {
    render(){
        return(
            <div className="bio">
                   <div className="flex-box-left">
                    <div className="column-5 flex-column flex-center">
                        <img src={require('../images/legos.png')} alt="legos" width="100%" className="animate-float"/>
                    </div>
                        <div className="column-6 flex-column flex-start">      
                             <h3 className="greeting bio-float">I build engaging, accessible, and collaborative digital learning environments</h3>     
                             <h3 className="greeting bio-float push-1">
                                 create 2-d games
                            </h3>  
                            <h3 className="greeting bio-float push-1 push-blue">
                                && develop web applications
                            </h3>  
                    </div>
                    </div>
                    <div className="row-padding"></div>
                    <div className="row-padding"></div>
                    <div className="flex-column gray">
                        <div className="column-10">
                        <h4 >I believe in <span className="highlight">active learning</span></h4><h4>and that even the most technical of concepts can be taught through <span className="highlight">creativity</span> and <span className="highlight">experimentation</span>. </h4>
                        </div>
                        
                    </div>
            </div>
        )
    }
}
export default Bio;
