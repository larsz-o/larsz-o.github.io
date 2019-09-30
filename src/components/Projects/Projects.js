import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ProjectView from '../ProjectView/ProjectView';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
            web: [{ title: 'Fitness Session Tracker', url: 'https://stormy-citadel-76866.herokuapp.com/#/', img: 'https://fitnessmeetswellness.com/wp-content/uploads/2019/04/larger-logo-test.jpg', img_desc: 'Fitness Meets Wellness logo', description: 'I built this tool for a personal trainer who was looking for an easier and less awkward way to remind her clients to pay her for their sessions. This app allows the trainer to track how many sessions a client has paid for and track when sessions are used. When a client has 3 or fewer prepaid sessions remaining, the trainer is prompted to email the client a pre-drafted reminder to bring payment the next time they come in for a session. Create an account and try it out yourself!' },
            {title: 'C+C Designs', url: 'https://radiant-journey-57761.herokuapp.com/#/home', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+10.55.37+AM.png', img_desc: 'C+C Designs logo', description: 'I built an e-Commerce site for a handmade home furnishings and custom furniture business. The site includes a from-scratch shopping cart built with React Redux, Stripe payment integration, and a product management system for admins to build their product catalog and keep track of orders.' },
            {title: 'Digital Teaching Innovation Lab', url:'http://blogs.brandeis.edu/instructionaldesign/', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+11.54.36+AM.png', img_desc: 'Digital Teaching Innovation Lab logo', description: 'I built a website for the instructional design team at Brandeis University using WordPress. I was responsible for determining the sitemap, layout, and design. I created the design from scratch using custom CSS throughout.'}, 
            {title: 'Minnesota Youth Story Squad', url: 'http://youthstorysquad.org', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+11.09.05+AM.png', img_desc: 'header for MYSS site', description: 'I worked with the MYSS project to build and maintain their WordPress site over two years. MYSS is the public repository for a project that amplifies the voices of middle-school students in the Twin Cities, teaching students to create digital stories with a social justice focus. I helped MYSS by creating a website that could be easily maintained by the founders to showcase these important stories.'}
        ],
            design: [{ title: 'Digital Storytelling - Video Production', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/imovie.png', img_desc: 'iMovie screen', description: 'I trained hundreds of undergraduate students and dozens of faculty how to use iMovie to create 5 minute digital storytelling projects. Students collated images and video clips and edited them into short video projects that narrated some story about their lives. I supported them in creating storyboards, using the iMoviee software, selecting Creative Commons media to use, and basic video editing and composition.' },
            {title: 'Digital Storytelling - Audio Production', url: '', img: '', img_desc: '', description: 'I provided training to hundreds of undergraduate students and faculty on writing and recording digital storytelling voiceovers. I coached them in audio recording techniques and provided guidance on basic audio editing and mixing using GarageBand and Audacity. I also helped these groups locate royalty-free music to use in their projects.' },
        ],
            research: [{ title: 'Interviews', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/voice-recorder-4275339_1920.png', img_desc: 'audio recorder', description: 'I conducted semi-structured, one-on-one interviews for my dissertation research using grounded theory methodology to develop my questions.' },
            {title: 'Focus Group Interviews', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/chat+(1).png', img_desc: 'chat icons', description: 'I devised and facilitated three focus group interview sessions for my dissertation research. I recorded, transcribed, and analyzed the sessions using a grounded theory methodology.'},
            {title: 'Archival Research', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/office-146135_1280.png', img_desc: 'archive box', description: 'I have conducted archival research in several collections, including: the Charles Babbage Institute, the Jean Nikolaus Tretter Colleciton in LGBT Studies, the Social Welfare History Archives, and the State of Minnesota Archives. I have also conducted research using archival materials from U.S. Congressional hearings, U.S. and state Supreme Court filings, and legal case files.'},
            {title: 'Social Media Research', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/twitter-2170426_1280.png', img_desc: 'Twitter icon', description: 'I have analyzed discussion forum conversations and Twitter posts as part of my dissertation research. For my Twitter analysis, I created a script pulled Tweets related to my research topic using the Twitter API. For my discussion forum project, I scraped and analyzed entire threads where adults were seeking support on specific topics related to their marginalization. I analyzed all of this qualitative data using Atlas.ti.'},
            {title: 'Surveys', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/survey.png', img_desc: 'survey icon', description: 'I have devised and administered surveys to assess learning outcomes for students in university courses and for hundreds of workshop participants.'},
        ],
            selected: '',
        }
    }
    linkClicked = (property) => {
        this.setState({
            ...this.state,
            selected: property,
            menu: false
        })
    }
    reset = () => {
        this.setState({
            ...this.state,
            menu: true,
            selected: ''
        })
    }
    render() {

        return (
            <section className="main">
                <Grid>
                    <Row>
                        <a href="/#/"><h2 className="smaller-header" id="back-arrow">Lars Mackenzie</h2>
                            <h4 className="subheading">web developer + academic technologist</h4></a>
                    </Row>
                    {this.state.menu ? (<div className="flex-box-evenly breathing-room">
                        <div onClick={() => this.linkClicked('web')} className="choice">
                            <h3>Web Development</h3>
                        </div>
                        <div onClick={() => this.linkClicked('design')} className="choice">
                            <h3>Academic Technology Design</h3>
                        </div>
                        <div onClick={() => this.linkClicked('research')} className="choice">
                            <h3>Research</h3>
                        </div>
                    </div>) : (<div>
                        {/* display whatever link you just clicked */}
                        <div className="choice margin-top margin-bottom"><span onClick={() => this.reset()}> &laquo; Return to Projects</span></div>
                     
                            {this.state.selected === 'web' && <div className="flex-box-evenly">
                                {this.state.web.map((project, i) => {
                                    return (
                                    <ProjectView project={project} key={i} demo={true}/>)
                                })}
                            </div>}
                            {this.state.selected === 'design' && <div className="flex-box-evenly">
                                {this.state.design.map((project, i) => {
                                    return (<ProjectView project={project} key={i} demo={false}/>)
                                })}
                            </div>}
                            {this.state.selected === 'research' && <div className="flex-box-evenly">
                                {this.state.research.map((project, i) => {
                                    return (<ProjectView project={project} key={i} demo={false}/>)
                                })}
                            </div>}

                        </div>
                    )}


                </Grid>
            </section>
        );
    }
}

export default Projects; 