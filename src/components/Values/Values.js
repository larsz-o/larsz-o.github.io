import React, { Component } from 'react';

class Values extends Component {
    constructor(props){
        super(props);
        this.state = {
            values = [
                {title: 'Accessibility', description: `Learning experiences should be accessible to all people. This is a goal for all of my work, though I know that this work is never done. To me, this means that all learning materials and experiences should be built with the expectation that people who need captions and screen readers will access them. It also means writing in clear language and not making assumptions about what might be 'common sense' to learners, as 'common sense' often reflects dominant and oppressive norms of society.`, img: ''},
                {title: 'Critical Pedagogy', description: ``, img: ''},
                {title: 'Usability', description: ``, img: ''},
                {title: 'Data Praxis', description: ``, img: ''},
            ]
        }
    }
    render(){
        return(
            <div className="projects">
                <h3>What I Value</h3>
                <p>I am driven by my commitments to usability, critical thinking, scalability, and accessibility when developing student learning experiences.</p> 


                <p>Open education, accessibility, critical pedagogy.</p>
                <p>Ethical uses of technology and data</p>
                <p>Universal design for learning</p>
                <p>I have taught and designed my own courses, both online and in person. During my doctoral program, I received pedagogical training and completed extensive course work in disability studies and social justice frameworks.
                I believe that technology can transform the ways we learn, connect, create, and process information, but also that learning goals should be at the center of all of technology decisions.
                </p>
            </div>
        )
    }
}
export default Values; 