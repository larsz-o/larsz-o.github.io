import React, {Component} from 'react';

class Bio extends Component {
    render(){
        return(
            <div className="bio">
                   <div className="flex-box-left">
                    <div className="column-2"></div>
                        <div className="column-8">      
                             <h3 className="greeting">Hi, I'm Lars!</h3>
                                <p>I'm a learning experience designer and full-stack web developer based in the Greater Boston area. I currently <a href="https://www.linkedin.com/in/lars-mackenzie/" target="_blank" rel="noopener noreferrer">work</a> at Brandeis University, where I build online educational experiences for the Rabb School of Continuing Studies, supporting faculty to foster interactivity, collaboration, and student success in digital classrooms.</p>   

                               <p>I love exploring educational technology that promotes research and teaching. At Brandeis, I support course development projects by developing web applications, editing audio and video, and creating interactive lessons. I also lead my team's efforts to support faculty who want to use cloud services for their teaching, such as Amazon Web Services and GitHub.</p>

                               <p>Prior to joining the team at Brandeis, I worked at the University of Minnesota, where I also completed my PhD. At Minnesota, I worked with faculty and graduate instructors to design and support digital projects in classroom instruction, aiding students in humanities and social science classrooms in developing digital stories and digital narrative maps. I also lead the production of online interactive modules for the Gender, Women, and Sexuality Studies department and coordinated the launch of a digital humanities initiative within that program. These projects all focused on integrating technology into teaching and research from a social justice perspective - thinking through how technology can give platforms to marginalized people and tell subjugated stories. </p> 
                               
                               <p>This work also entailed carefully considering the ethics of technology production and attention to concerns around privacy and data sharing, a topic which I explore in my research.</p>
                               
                    </div>
                    </div>
            </div>
        )
    }
}
export default Bio;