import React, { Component } from 'react';
import ProjectView from '../ProjectView/ProjectView';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
            web: [
            {title: 'Digital Learning Design Lab', url:'http://blogs.brandeis.edu/instructionaldesign/', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-10-02+at+1.35.19+PM.png', img_desc: 'Digital Teaching Innovation Lab logo', description: 'I built a website for the instructional design team at Brandeis University using WordPress. I was responsible for determining the sitemap, layout, and design. I created the design from scratch using custom CSS throughout.'}, 
            {title: 'Minnesota Youth Story Squad', url: 'http://youthstorysquad.org', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+11.09.05+AM.png', img_desc: 'header for MYSS site', description: 'I worked with the MYSS project to build and maintain their WordPress site over two years. MYSS is the public repository for a project that amplifies the voices of middle-school students in the Twin Cities, teaching students to create digital stories with a social justice focus. I helped MYSS by creating a website that could be easily maintained by the founders to showcase these important stories.'},
            { title: 'Fitness Session Tracker', url: 'https://stormy-citadel-76866.herokuapp.com/#/', img: 'https://fitnessmeetswellness.com/wp-content/uploads/2019/04/larger-logo-test.jpg', img_desc: 'Fitness Meets Wellness logo', description: 'I built the Fitness Session Tracker for a personal trainer who was looking for an easier and less awkward way to remind her clients to pay her for their sessions. This web app allows the trainer to track how many sessions a client has paid for and track when sessions are used. When a client has 3 or fewer prepaid sessions remaining, the trainer is prompted to email the client a pre-drafted reminder to bring payment the next time they come in for a session. Email reminders are sent using the Google Mail API through Node.' },
            {title: 'C+C Designs', url: 'https://radiant-journey-57761.herokuapp.com/#/home', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+10.55.37+AM.png', img_desc: 'C+C Designs logo', description: 'I built an e-Commerce site for a handmade home furnishings and custom furniture business. The site includes a from-scratch shopping cart built with React Redux, Stripe payment integration, and a product management system for admins to build their product catalog and keep track of orders.' },
            {title: 'Dinner Diary', url: 'https://cryptic-bastion-11483.herokuapp.com/#/', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+2.09.29+PM.png', img_desc: 'header for Dinner Diary', description: 'I created this web app to practice using Redux. The application guides the user through a series of questions about the dinner they ate and collects the data along the way in a Redux store. The user can keep track of their favorite meals using this tool and sort the log to determine which meals were best ranked.'},
            {title: 'Is David Schwimmer Alive?', url: 'https://afternoon-scrubland-12147.herokuapp.com/', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/David_Schwimmer_Jul_2005_London%2C_England_Crop%26blur.jpg', img_desc: 'David Schwimmer', description: 'Is David Schwimmer Alive? is a 90\'s style web app that checks the Wikipedia API to see if David Schwimmer is still alive or not. This page also contains a random quote generator where users can find quotes from David Schwimmer or Ross Gellar. You can add your own contributions, too!'}
        ],
            design: [{ title: 'Digital Storytelling - Video Production', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/imovie.png', img_desc: 'iMovie screen', description: 'I trained hundreds of undergraduate students and dozens of faculty how to use iMovie to create 5 minute digital storytelling projects. Students collated images and video clips and edited them into short video projects that narrated some story about their lives. I supported them in creating storyboards, using the iMovie editing software, selecting Creative Commons media to use, and basic video editing and composition.' },
            {title: 'Digital Storytelling - Audio Production', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Blue_Snowflake_USB_microphone.jpg', img_desc: 'microphone', description: 'I provided training to hundreds of undergraduate students and faculty on writing and recording digital storytelling voiceovers. I coached them in audio recording techniques and provided guidance on basic audio editing and mixing using GarageBand and Audacity. I also helped these groups locate royalty-free music to use in their projects.' },
            {title: 'Digital Mapping', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/760px-CFB_Winnipeg_open_street_map.png', img_desc: 'open street map', description: 'I trained hundreds of undergraduate students and dozens of faculty how to use ArcGIS Online to create digital maps. I also trained students to use ArcGIS StoryMaps and StoryMapJS to produce narrative digital maps in their courses. I led trainings on how to collect, sort, and upload geographic data and how to create a visually effective map using design principles.'},
            {title: 'Interactive Lessons', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+1.00.18+PM.png', img_desc: 'image from an interactive lesson', description: 'I have built interactive lessons using Articulate Storyline and the Lesson plugin for Moodle. This image is from a lesson teaching time management skills to online students. Other projects include creating a Health and Wellness training for all incoming Brandeis University students and producing 5 lessons on fundamental concepts in Gender and Women\'s studies for the University of Minnesota which are used throughout the world. Though my role for each project differed slightly, in general I: devised assessement tools, wrote content, sourced royalty-free images to use, lead the design concept (including color/typography/images, animations, and interactivity), and recorded voiceover.'},
            {title: 'Moodle Design', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/Screen+Shot+2019-09-30+at+1.20.26+PM.png', img_desc: 'screenshot of course shell', description: 'I have worked with faculty to impove the usability of their Moodle sites. When redesigning a course website, I focus on creating clean, simple views that provide students with the context they need to complete the assigned work. For online courses in particular, I am a strong advocate for using the space of the course website to communicate instructor voice.'},
            {title: 'Online Teaching', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/computer-159466_640.png', img_desc: 'computer', description: 'I support the development of dozens of online master\'s courses for Brandeis University. I have also developed and taught my own online courses at the University of Minnesota. I devise activities and assignments that are applied and encourage student interactivity. I regularly utilize tools such as VoiceThread, FlipGrid, H5P, Zoom, and native LMS plugins (discussion forums, hot question, feedback) towards these goals.'},
            {title: 'Cloud Computing Support', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/cloud-3311588_640.png', img_desc: 'the cloud', description: 'I support faculty in Software Engineering and Robotics in spinning up and managing servers and development environments in the cloud. I also manage our unit\'s GitHub account and provide faculty access to GitHub Classroom. Part of this role also includes creating documentation for students on how to use these services, configuring IAM roles, creating configuration starter code, and generally being a problem solver. If a faculty member wants to try something new related to the cloud, I am the one who figures out how we can implement it.'},
            {title: 'Online Faculty Resources', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/pixel-cells-3704070_640.png', img_desc: '', description: 'I have developed a number of tools for faculty to aid them in using online tools for teaching or to streamline the course development process. Some of these projects include: a self-guided online orientation to using Moodle, a workload estimator built with Google Sheets and the Google API, and a topic selection web app to help organize student presentations.'}
        ],
            research: [{ title: 'Interviews', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/voice-recorder-4275339_1920.png', img_desc: 'audio recorder', description: 'I conducted semi-structured, one-on-one interviews for my dissertation research using grounded theory methodology to develop my questions.' },
            {title: 'Focus Group Interviews', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/bubble-602146_640.png', img_desc: 'chat icons', description: 'I devised and facilitated three focus group interview sessions for my dissertation research. I recorded, transcribed, and analyzed the sessions using a grounded theory methodology.'},
            {title: 'Archival Research', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/office-146135_1280.png', img_desc: 'archive box', description: 'I have conducted archival research in several collections, including: the Charles Babbage Institute, the Jean Nikolaus Tretter Colleciton in LGBT Studies, the Social Welfare History Archives, and the State of Minnesota Archives. I have also conducted research using archival materials from U.S. Congressional hearings, U.S. and state Supreme Court filings, and legal case files.'},
            {title: 'Social Media Research', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/twitter-2170426_1280.png', img_desc: 'Twitter icon', description: 'I have analyzed discussion forum conversations and Twitter posts as part of my dissertation research. For my Twitter analysis, I created a script that pulled Tweets related to my research topic using the Twitter API. For my discussion forum project, I scraped and analyzed entire threads where adults were seeking support on specific topics related to their marginalization. I analyzed all of this qualitative data using Atlas.ti.'},
            {title: 'Surveys', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/survey.png', img_desc: 'survey icon', description: 'I have designed and administered surveys to assess learning outcomes for students in university courses and for hundreds of workshop participants.'},
            {title: 'Database Architecture Design', url: '', img: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/featured1.svg', img_desc: 'database icon', description: 'I have been responsible for developing relational database architectures for web applications and for defining metadata schemas for digital media assets.'}
        ],
            selected: '',
            isDestkop: true
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
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate = () => {
        this.setState({
            isDesktop: window.innerWidth >= 768
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <section className="main">
                      <div className="flex-box-between baseline">
                      {isDesktop? (<div className="column-5">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>):(<div className="column-5">
                            <h2 className="name-header">Lars Mackenzie, PhD</h2>
                            <h4 className="subheading">web developer + academic technologist</h4>
                        </div>)} 
                       {isDesktop ? (<div className="nav column-5">
                            <div className="flex-box-between"><h4 className="space"><a className="white" href="/">About</a></h4>
                            <h4 className="space"><span className="link white" onClick={()=>this.reset()}>Projects</span></h4>
                            <h4 className="space"><a className="white" href="/#/contact">Contact</a></h4></div>
                        </div>):(<div className="nav column-5">
                            <div className="flex-box-between"><h4 className="space"><a className="white" href="/">About</a></h4>
                            <h4 className="space"><a className="white" href="/#/projects">Projects</a></h4>
                            <h4 className="space"><a  className="white" href="/#/contact">Contact</a></h4></div>
                        </div>)} 
                    </div>
                    {this.state.menu ? (<div className="flex-box-evenly breathing-room">
                        <div onClick={() => this.linkClicked('web')} className="choice column-3 center">
                            <h3>Web Development</h3>
                        </div>
                        <div onClick={() => this.linkClicked('design')} className="choice column-3 center">
                            <h3>Academic Technology Design</h3>
                        </div>
                        <div onClick={() => this.linkClicked('research')} className="choice column-3 center">
                            <h3>Research</h3>
                        </div>
                    </div>) : (<div>
                        {/* display whatever link you just clicked */}
                     <div class="margin-bottom margin-top"></div>
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
               
            </section>
        );
    }
}

export default Projects; 