import React, {Component} from 'react';

class Bio extends Component {
    render(){
        return(
            <div className="bio">
                   <div className="flex-box-left">
                    <div className="column-2"></div>
                        <div className="column-8">      
                             <h3 className="greeting">Hi, I'm Lars!</h3>
                                <p className="bio-text">I'm a learning experience designer and full-stack web developer based in the Greater Boston area. I currently work at Brandeis University, where I build online educational experiences for the Rabb School of Continuing Studies, supporting faculty to foster <span className="highlight">interactivity</span>, <span className="highlight">collaboration</span>, and  <span className="highlight">authentic learning </span>in digital classrooms.</p>   

                               <p className="bio-text">In this role, I work with instructors to develop project-based courses where students learn by doing. I believe strongly in collaborative, hands-on learning -- and that even the most technical of concepts can be taught through <span className="highlight">creativity</span> and <span className="highlight">experimentation.</span> Some highlights of my work include redesigning a course template used for twelve online graduate programs; developing a health and wellness training for all incoming first-year and transfer students; and building web applications for teaching and learning. I also lead my team's efforts to support faculty who want to use cloud services for their teaching, such as Amazon Web Services and GitHub.</p>

                               <p className="bio-text">Prior to joining my current team, I worked at the University of Minnesota, where I earned my PhD. At Minnesota, I worked with faculty and graduate instructors to design and support digital projects in classroom instruction, aiding students in humanities and social science classrooms in developing <span className="highlight">digital stories</span> and <span className="highlight">digital narrative maps</span>. I was trained in <span className="highlight">critical pedagogy</span> at Minnesota and during my undergraduate program at Hampshire College, a hub for alternative and experiemental education.</p> 
                               <p className="bio-text">In my freelance work, I've built websites for small businesses, professional websites for freelancers and academics, web applications to help people manage tedious daily tasks, and <span className="highlight">interactive educational resources</span> for non-profit organizations. I am also working on my <span className="highlight">game design</span> skills - for fun and for clients! If you are interested in working with me, <a href="mailto:larsmackenzie@gmail.com">shoot me an email</a> to get the conversation started.</p>
                               <p className="bio-text">In addition to my learning design and web development work, I have extensive experience with qualitative research. I have conducted interviews, focus groups, discursive analysis, and surveys in academic and user-focused studies. I love using research to better understand a problem or test a solution in the realms of web, learning, and game design.</p>
                               
                    </div>
                    </div>
            </div>
        )
    }
}
export default Bio;