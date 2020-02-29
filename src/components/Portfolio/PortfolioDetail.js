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
            projects: [{title: 'Infographics', category_id: 0, images: [{url:'redevelopment-process.png'}], description: 'I using ', link: ''}],
            categories: [
                {id: 0, slug: 'visual-design', name: 'visual design', image: 'visual.png'},
                {id: 1, slug: 'multimedia', name: 'multimedia production', image: 'animation.png'},
                {id: 2, slug: 'web-lms', name: 'web and LMS design', image: 'LMS.png'},
                {id: 3, slug: 'game-design',name: 'game design', image: 'games.png'},
                {id: 4, slug: 'teaching', name: 'instructional coaching and support', image: 'support.jpg'},
                {id: 5, slug: 'training', name: 'technical trainings', image: 'video.jpg'},
                {id: 6, slug: 'research', name: 'research, writing, and evaluation', image: 'research.jpg'},
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
            <a href="/#/portfolio"><img className="back-arrow column-1" src={require('../images/icons/back.svg')} alt="back arrow"/></a>
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