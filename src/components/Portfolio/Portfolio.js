import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../App.css';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {id: 0, slug: 'visual-design', name: 'visual design', image: 'visual.png'},
                {id: 1, slug: 'multimedia', name: 'multimedia production', image: 'storyboard.jpg'},
                {id: 2, slug: 'web-lms', name: 'web and LMS design', image: 'css.png'},
                {id: 3, slug: 'game-design',name: 'game design', image: 'games.png'},
                {id: 4, slug: 'training', name: 'technical trainings', image: 'video.jpg'},
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
                        <p>Browse some of my learning design projects.</p>
                    </div>
                    <div className="spacing-bigger">
                        <div className="flex-box-evenly">
                        {this.state.categories.map((cat, i) =>{
                            return(
                            <div className="column-4 category-div" key={i}>
                                <a href={`/#/detail/${cat.id}`}><h3 className="center">{cat.name}</h3></a>
                                {cat.image.length > 1 && <a href={`/#/detail/${cat.slug}`}><img src={require(`./${cat.image}`)} className="portfolio-image" alt={cat.name}/></a>}
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default PortfolioPage;
