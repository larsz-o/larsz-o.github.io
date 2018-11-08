import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {id: 1, title: 'Fitness Session Tracker', short_summary: `A full-stack web application to keep track of prepaid personal training sessions.`, summary: `Fitness Session Tracker is a full-stack web application built for a personal trainer to help her keep track of the sessions that her clients purchase. She can enter her clients' information and the number of sessions they purchased. As they complete sessions, she logs them to their own card. When a client completes within 3 sessions of their prepaid total, an email icon appears, allowing the trainer to send a reminder email to the client, asking them to purchase additional sessions. When the card is full (all prepaid sessions are  used), no more sessions can be logged.  Clearing the card sets prepaid sessions to 0. This application simplified an awkward business interaction -- asking clients to purchase more sessions -- and allows my client to focus on what really matters: providing great service to her clients.`, image: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/card.png', thumbnail: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/send-reminder.png', githubURL: 'https://github.com/larsz-o/fitness-session-tracker'},
                {id: 2, title: `When's My Beep?`, short_summary: `A full-stack web applications for nurses to keep track of their IV medications during a busy shift.`, summary: `A full stack web application to help nurses keep track of their "beeps" (an alert from an intravenous drip machine when a medication needs attention). It's important for nurses to stay organized, especially when jumping between multiple rooms with patients who are administered many intravenous drugs. Heaing a "beep" from across the hall can be stressful if it comes when you least expect it.  This web application helps nurses visualize exactly when their "beeps" will go off by letting them enter a list of all of the drugs they want to track during a shift. Nurses can enter a "expiration time" for each medication and get visual warnings when the timer gets under 5 minutes or completely expires. Most importantly, this application allows nurses to log in and out without disrupting the countdown. This means that they can check in when they are logging medications in any room, on any device.`, image: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/whens_my_beep.png', thumbnail: `https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/whens_my_beep_thumb.png`, githubURL: 'https://github.com/larsz-o/whens_my_beep'},
                {id: 3, title: 'What Should We Watch?', short_summary: `A full-stack web application to collect, rate, favorite, and organize movies you'd like to watch.`, summary: `What Should We Watch? is a full-stack web application built with AngularJS, Node, Express, and PostgreSQL. It allows users to add and rate movies, sort by genre, and add their favorites to a Favorites list. This application helps prevent endless movie scroll through Netflix, Hulu, Amazon Prime, HBO, or the countless other streaming services. Users can mark where the movies are located (DVD, on a specific streaming service, RedBox, etc.) to quickly access the film. Collect all of your favorite movies in one place and get to watching, not scrolling!`, image: 'https://github.com/larsz-o/professional-portfolio/blob/master/src/components/images/screenshot.png', thumbnail: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/movie_collection_thumbnail3.png', githubURL: 'https://github.com/larsz-o/movie_collection'},
                {id: 4, title: 'Dinner Diary', short_summary: 'A full-stack web application to keep track of your favorite meals.', summary: `Dinner Diary is a React.js web application you can use to rate each dinner you eat over the course of a year, or many years. In my house, we're always trying to remember what meals we cooked that we want to make again and again. With Dinner Diary, we can rate each dinner by its taste, texture, creativity, and nutrition, and leave some comments about the meal. Each meal is given an overall numeric rating that we can see in the ratings table. Never forget what the best dinner of the year was again!`, image: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/dinner_thumbnail_tAxHgu2.png', thumbnail: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/taste.png', githubURL: 'https://github.com/larsz-o/redux-feedback-loop'},
                {id: 5, title: 'OurPets', short_summary: 'A full-stack, mobile-first web application to help people communicate about daily pet care.', summary: `OurPets is a mobile-first React.js web application to help people communicate about daily pet care. Users can create households where they can add all of their pets and invite other household members to join. Upon logging in, users can mark if their pets have been fed, walked, had their litterboxes changed, or been administered any medications. All household members who opt-in will receive a text message alert when these activities are completed. Users can also message others in their households to communicate about pet needs. This application solves a problem that I have -- my dog always tries to trick us into thinking he hasn't been fed -- and makes it simple for busy people to keep track of their pets' needs. It's also great for pet sitters as the inbox feature allows users to send messages and upload images of pets without bothering owners with multiple updates while they're away.`, image: 'https://raw.githubusercontent.com/professional-portfolio/master/src/components/images/dashboard-view.png', thumbnail: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/ourpets_thumbnail4.png', githubURL: 'https://github.com/larsz-o/our-pets'}, 
                {id: 6, title: 'odissii', short_summary: 'A full-stack, mobile first web application that allows supervisors to track the feedback they give.', summary: `odissii is a React.js responsive web application that allows supervisors to track the feedback they give to their employees to improve supervisor-employee relationships. Supervisors can add new feedback records and view graphs of past feedback given to better visualize which employees need more support and who is achieving their goals. They can also download a spreadsheet of all detailed feedback sessions over the course of a year, which they can use to administer performance reviews. Built with: React, PostgreSQL, Node, Express, Nodemailer, Material UI, Chart.js, Cloudinary, Moment.js, Sweealerts, and Chance.`, image: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/supervisor_dashboard_view_2.png', thumbnail: 'https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/components/images/odissii_thumb.png', githubURL: 'https://github.com/larsz-o/odissii'},
            ]
        }
    }
    render() {
        return (
            <div>
                <main role="main">
                    <section class="jumbotron white">
                        <div className="flex-box">
                            <h1 className="jumbotron-heading">Lars Mackenzie</h1>
                        </div>
                        <div className="flex-box margin-top">
                            <div className="col-md-4">
                                <img src="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/lars.jpg" alt="Lars headshot" height="300" />
                            </div>
                            <p className="col-md-4">I am a full-stack software developer with a background in research, higher education,
                            and social services.<br /> I love creating technology that can improve people's lives - from automating
                                                tedious processes, to building platforms to connect people, to delivering meaningful insights from under-utilized
                                                data.
                            </p>
                        </div>
                        <div className="flex-box">
                            <div className="col-md-4">
                                <p className="text-center">
                                    <br />
                                    <a className="padding" href="http://github.com/larsz-o" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/github.png" /></a>
                                    <a className="padding" href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/linkedin.png" /></a>
                                    <a className="padding" href="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/lars-resume-Nov2018.pdf" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/resume.png" /></a>
                                    <a className="padding" href="mailto:larsmackenzie@gmail.com"><img src="https://raw.githubusercontent.com/larsz-o/professional-portfolio/master/src/static/gmail.png" /></a>
                                </p>
                            </div>
                            <p className="col-md-4">I'm always interested in connecting with others to talk about software, diversity
                                    and equity work, and dogs. If you are interested in hiring me to build software for you or your
                                    organization, please reach out!
                    </p>
                        </div>
                    </section>
                    <section class="jumbotron text-center white">
                        <div class="album py-5 bg-light">
                            <div class="container flex-box">
                                <h1 class="jumbotron-heading margin-bottom">Projects</h1>
                                <div class="flex-box-cards">
                                {this.state.projects.map((project, i) => {
                                    return (
                                        <div key={i} class="col-md-4">
                                        <div class="project-card">
                                            <h2 class="card-header">{project.title}</h2>
                                            <a href="link">
                                                <img class="card-img-top" src={project.thumbnail} alt={project.title} maxWidth={250}/>
                                            </a>
                                            <p class="project-card-text">{project.short_summary}</p>
                                        </div>
                                    </div>
                                    );
                                })}
                                  

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}
export default HomePage; 