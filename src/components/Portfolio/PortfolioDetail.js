import React, { Component } from 'react';
import Header from '../Header/Header';
import PortfolioItem from './PortfolioItem';

class PortfolioDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            category: '',
            cateogory_id: '',
            category_name: '',
            projects: [
                {title: 'Infographics', category_id: 0, images: [{url:'redevelopment-process.png', link: ''}, {url: '4years.png', link: ''}, {url:'presentation.svg', link: ''}, {url: 'googleslides.png', link: ''}], description: 'I love using visual elements to tell a story. I have created infographics for presentations and as professional development resources.'},
                {title: 'Avatars + Icons', category_id: 0, images: [{url:'avatars.png', link: ''} ], description: 'While there are lots of great icons available online, they often lack diversity. I design my own avatars and icons for multimedia projects.'},
                {title: 'Interactive Lessons', category_id: 1, images: [{url: 'scenario.png', link: ''},{url: 'video.png', link: ''},{url: 'peercrit.png', link: 'https://peer-crit.herokuapp.com/#/'},{url: 'health-wellness.png', link: ''},{url: 'map.png', link: 'https://h5p.org/h5p/embed/514102'},{url:'time-management.png', link:'https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/Time+Management+Module/story.html'},{url: 'animation.png', link: ''} ], description: 'I have built interactive lessons using Storyline, H5P, and from scratch using JavaScript, HTML, and CSS on the front-end, and Node and PostgreSQL on the back-end. I have worked with Vyond to create animations for learning design and Unity to animate sprites in game design.'},
             
                {title: 'Multimedia Course Notes', category_id: 1, images: [{url: 'pubpub.png', link: 'https://rbif-101.pubpub.org/pub/week-1'}], description: 'I encourage faculty to be creative and center accessibility needswhen writing their instructional materials. I have built course notes for instructors to supplement audiovisual materials for accessibility purposes and to break up large segments of text with meaningful illustration.'},
                {title: 'Learing Management System Design', category_id: 2, images: [{url: 'LMS.png', link: 'https://docs.google.com/presentation/d/1IljiwUZxkU93a9WvQ9cbj1v2k6GdLQh0BaznTXH6MVI/edit?usp=sharing'}, {url: 'careerlab-weekly.png', link: ''},], description: 'Learning management systems get a bad rap for being outdated and not-so user-friendly. I love creating custom templates to improve LMS user experience.'},
                {title: 'Web Design', category_id: 2, images: [{url: 'digitallearn.png', link: 'http://blogs.brandeis.edu/instructionaldesign/'}, {url: 'myss.png', link: 'https://youthstorysquad.org/'},], description: 'I have built websites from scratch and by leveraging content management systems for a range of clients.'},
                  {title: '2D Game Design', category_id: 3, images: [{url: 'block.png', link: 'https://unitygameslzm.s3.us-east-2.amazonaws.com/blockbreaker/index.html'}, {url: 'games.png', link: 'https://unitygameslzm.s3.us-east-2.amazonaws.com/TheSkyIsHaunted/index.html'}, {url: 'toast.png', link: 'https://unitygameslzm.s3.us-east-2.amazonaws.com/ReedsStreetToast/index.html'}], description: 'I build 2D computer games for fun in my free time with the Unity game engine. I write the code in C# and design some of the graphics in Illustrator. I source the graphics and sounds that I do not create from freely available public resources.'},
                  {title: 'Audio Visual Production', category_id: 4, images: [{url: 'digitalstory.png', link: 'https://drive.google.com/open?id=1S7koWEpS9v0HfDMyQ_mNsD80uBW4LjpR'}, {url: 'maps.png', link: 'https://drive.google.com/file/d/1wqlLn1gD6rQV71KfgYhR4qmZvCsB65S1/view?usp=sharing'}], description: 'I have trained hundreds of students and dozens of faculty how to produce short video projects and narrative digital maps - from storyboarding to post-production.'},
                 {title: 'Design Thinking', category_id: 5, images: [{url: 'userfeedback.png', link: ''}], description: 'I use design thinking to guide my work: building products with users at the center, dreaming up the best possible solution, and going back to the drawing board after rounds of iteration and testing. I draw on a range of research and design tools: storyboard, prototypes, surveys, and interviews.'}
            
            ],
            categories: [
                {id: 0, slug: 'visual-design', name: 'visual design', image: 'visual.png'},
                {id: 1, slug: 'multimedia', name: 'multimedia production', image: 'animation.png'},
                {id: 2, slug: 'web-lms', name: 'web and LMS design', image: 'LMS.png'},
                {id: 3, slug: 'game-design',name: 'game design', image: 'games.png'},
                {id: 4, slug: 'training', name: 'technical trainings', image: 'video.jpg'},
            ]
        }
    }
    componentDidMount(){
        let params = this.props.match.params.slug;
        this.setCategory(params);
    }
    setCategory = (params) => {
        let selected = this.state.categories.filter(category => category.slug === params);
        console.log(selected);
        this.setState({
            ...this.state,
            category: params,
            category_id: selected[0].id,
            category_name: selected[0].name
        })
    }
    render(){
        return(
        <div className="main">
              <Header display={false} />
            <a href="/#/portfolio" ><span className="back-arrow column-1">&larr;</span>back to portfolio</a>
                <h2 className="category-title">{this.state.category_name}</h2>
                {this.state.projects.map((project, i) => {
                    if(project.category_id === this.state.category_id){
                        return (
                            <PortfolioItem project={project}/>
                        )
                    } else {
                        return false;
                    }
                })}
        </div>
        );
    }
}
export default PortfolioDetail;