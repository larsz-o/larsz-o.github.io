import React, { Component } from 'react';
import Header from '../Header/Header';
import PortfolioItem from './PortfolioItem';
import Footer from '../Footer/Footer';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/peercrit.png', title: 'Peer Critique Practice Activity', description: `I created this activity as a sample for a UX Design instructor who wanted her students to practice the method of giving feedback on their peers' work in progress. Students are guided through a series of prompts to help them formulate critical and constructive feedback on a sample peer project. I designed the application from scratch using React (JavaScript), Material UI, and Redux.`, link: 'https://quiet-brushlands-95565.herokuapp.com/#/', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/chaplains.png', title: 'Interactive Case Studies - Chaplaincy Education', description: `I was hired as an instructional design consultant for a chaplaincy education project, "Educating Effective Chaplains," which aims to build a curriculum for training chaplains across the nation. I am designing three interactive case study lessons for this group. You can view a presentation of my preliminary design sketches here.`, link: 'https://docs.google.com/presentation/d/1S4ZtG8fiw8quu8jeqg_J5vpv6genxgz2gavHIFiR4Kc/edit?usp=sharing', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/newcoursetemplate-top.png', title: 'Moodle Course Template Redesign', description: `I redesigned a Moodle course template used for 12 online Master's degree programs. Some of the key improvements include a cleaner look and feel, contextualization of learning expectations, and increased instructor presence. After I developed the user interface (using Bootstrap and custom CSS), I tested it with current students. One student remarked, "It looks modern, unfussy, and less cluttered than the current version. It's more visually appealing and much more user friendly. The layout is clear and there is no guessing about where to find information or course content." View a presentation comparing the before and after here.`, link: 'https://docs.google.com/presentation/d/1PD38_rrRMmSZfwkTnG95WSP_Ek3REErSuiH3C0hiiwQ/edit?usp=sharing', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/time-management.png', title: 'Time Management Interactive Lesson', description: `I revised an existing time management tutorial aimed to help new online graduate students with time management skills. Using existing voiceover audio files, I built out new visuals, interactions, and animations for this training using Articulate Storyline. View the complete module here.`, link: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/Time+Management+Module/story.html', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/factors.png', title: 'Health and Wellness training', description: `I was brought on to design and implement a health and wellness online training which is completed by all incoming first-year and transfer students at Brandeis University. I worked with subject matter experts in the Health and Wellness Promotion Program to develop a 6 lesson training complete with pre- and post-assessments, lessons, comprehension checks, and resources. The training was built in Moodle.`, link: 'https://www.brandeis.edu/health/promotion/', demo: false },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/myss.png', title: 'Minnesota Youth Story Squad Site Design', description: `I was hired to develop a WordPress site for an organization that works with middle school students to create digital stories. The goal was to create a site that could be easily kept up by the organization's leadership. I designed the initial site layout, created documentation for maintanence, and supported digital asset storage and backups.`, link: 'https://www.youthstorysquad.org/', demo: false },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/fmw.png', title: 'Fitness Session Tracker', description: `I was hired to create a client management system for a personal trainer. This web application allows the trainer to log prepaid training sessions and send out reminder emails when a client's sessions are low. Built with React, Node, Express, and PostgreSQL.`, link: 'https://stormy-citadel-76866.herokuapp.com/', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/cc.png', title: 'C+C Designs', description: `I built a demo application for a client who wanted a custom eCommerce site for his furniture making business. The site is not live for orders, but feel free to take a look around at the design. I built an admin portal, shopping card, and Stripe integration for the application.`, link: 'https://radiant-journey-57761.herokuapp.com/#/home', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/digitalstorytelling.png', title: 'Digital Storytelling Trainings', description: `I have developed and facilitated trainings on digital storytelling - a method of creating short video projects to tell a personal story - to hundreds of undergraduate students. I taught students to create storyboards and scripts, record audio and video content, and assemble and edit media using iMovie and GarageBand. View a slide deck from one of my introduction lectures here.`, link: 'https://drive.google.com/file/d/1WgmBFDMfbKrXRCvnuRvn6EOgGs3x_SDO/view?usp=sharing', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/storymaps.png', title: 'StoryMap Trainings', description: `I have developed and facilitated trainings on creating digital narrative web maps, using ArcGIS Online, ArcGIS StoryMaps and StoryMapJs, to hundreds of undergraduate students. I taught students how to manipulate geographic data, tell a visual story using data, and locate copyright free media. View a slide deck from one of my introduction lectures here.`, link: 'https://drive.google.com/file/d/1wqlLn1gD6rQV71KfgYhR4qmZvCsB65S1/view?usp=sharing', demo: true },
                { image: 'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/profsite.png', title: 'This site!', description: `I designed this portfolio website from scratch. Like it? I can build one for you, too!`, link: '/#/', demo: true },

            ]
        }
    }
    render() {
        return (
            <div>
                <div className="main">
                    <Header display={false} />
                    <div className="flex-box-center spacing-bigger">
                        <h2>Portfolio</h2>
                    </div>
                    <div className="flex-box-center">
                        <p>Browse some of my learning design and web development projects.</p>
                    </div>
                    <div className="spacing-bigger">
                        {this.state.projects.map((project, i) => {
                            return (
                                <PortfolioItem key={i} project={project} />
                            )
                        })}
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default PortfolioPage;