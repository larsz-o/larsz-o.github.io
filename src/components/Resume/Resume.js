import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Grid, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true
        }
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
            isDesktop: window.innerWidth > 1024
        })
    }
    render() {
        let isDesktop = this.state.isDesktop;
        return (
            <section className="main">
                <Nav />
                <Grid>
                    <Row className="center">
                        <Col xs={12} md={6} lg={8}>
                            {isDesktop ? (<img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291867/code-min.jpg" height="500px" alt="computer" responsive />) : (<img src="https://res.cloudinary.com/dnrk3irn4/image/upload/v1548291867/code-min.jpg" width="300px" alt="computer" responsive />)}
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <h3>Download my <a className="link" href={require('../images/Mackenzie_Resume2019.pdf')}>resume</a></h3>
                            <p>Last updated January 2019</p>
                            <Row>
                                <Col xs={12} md={12} lg={12}>
                                    <h3>Or read about my <Link className="link" to="/resume#workshops"> workshops and trainings,</Link><Link className="link" to="/resume#tech"> technical skills,</Link><Link className="link" to="/resume#presentations"> presentations</Link>,<Link className="link" to="/resume#publications"> publications,</Link><Link className="link" to="/resume#multimedia"> multimedia projects,</Link><Link className="link" to="/resume#awards"> and awards.</Link></h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="gimme-room"></div>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div id="workshops">
                                <h3 className="dashed-edge">Selected Workshops + Trainings</h3>
                                <ul className="skills-list">
                                    <li>Creating a More Equitable Classroom, with Saumya Arora</li>
                                    <li>Feminist Interactive Modules 2.0, with Jigna Desai</li>
                                    <li>Digital Storytelling for Social Justice - For Faculty</li>
                                    <li>Digital Storytelling for Social Justice - For Students</li>
                                    <li>Mapping "Epidemics"</li>
                                    <li>Mapping Violence</li>
                                    <li>Mapping Food Justice</li>
                                    <li>Feminist Wikipedia-Edit-a-Thon</li>
                                    <li>Digital Feminist Media Praxis, with Justin Schell + Kim Clarke</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div id="tech">
                                <h3 className="dashed-edge">Technical Skills</h3>
                                <ul className="skills-list">
                                    <li>Web Development: JavaScript, Python, HTML, CSS, SQL, MongoDB, RESTful APIs, XML</li>
                                    <li>Data Visualization and Analysis: Chart.js, D3, Atlas.ti, NVivo, R, ArcGIS</li>
                                    <li>Media Production: iMovie, Final Cut Pro, GarageBand, ArcGIS StoryMaps, Audacity</li>
                                    <li>Content Management Systems: WordPress, Scalar, Drupal, Omeka, Moodle, Canvas, Articulate Storyline</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div id="presentations">
                                <h3 className="dashed-edge">Selected Presentations</h3>
                                <ul className="skills-list">
                                    <li>"Dangerous Data: The Gendered and Racialized Politics of Ethical Data Reduction." University of Minnesota Endangered Data Week, 2019.</li>
                                    <li>"Digitizing Difference: Fraudulence, Gender Non-Conformity, and Data." University of Minnesota, 2019.</li>
                                    <li>"Identity Thieves: Seizing the Means of Gender Self-Determination." University of Maryland, 2018.</li>
                                    <li>"Seeing Systems/Seeing Gender." Latitude, 2017.</li>
                                    <li>"Haunted By Data: Trans Digital Deceptions." American Anthropological Association, 2017</li>
                                    <li>"Data Anamolies: Identity Fraud Detection, Gender Non-Conformity, and the Trouble with Authenticity." University of Illinois, Urbana-Champaign, 2017.</li>
                                    <li>"Accounting for Change: Big Data Survillance, Administrative Governance, and Trans-Identification Temporalities." American Studies Association, 2016.</li>
                                    <li>"The Afterlife of Data: Identity, Capitalism, and the Surveillance of Gender Transition in Credit Reporting." University of Maryland, 2016.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div id="publications">
                                <h3 className="dashed-edge">Publications</h3>
                                <ul className="skills-list">
                                    <li><a href="https://doi.org/10.1215/23289252-3711529">"The Afterlife of Data: Identity, Surveillance, and Capitalism in Trans Credit Reporting."</a> Transgender Studies Quarterly, 2017.</li>
                                    <li><a href="http://genderpolicyreport.umn.edu/too-costly-the-fight-for-trans-health-care-in-the-courts-and-legislature/">"Too Costly?: The Fight for Trans Healthcare in the Courts and Legislature."</a> The Gender Policy Report, 2017.</li>
                                    <li><a href="https://genderpolicyreport.umn.edu/impacts-of-the-financial-choice-act-on-transgender-people/">"The Impacts of the Financial CHOICE Act on Transgender People."</a> The Gender Policy Report, 2017.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div id="multimedia">
                            <h3 className="dashed-edge">Multimedia Projects</h3>
                                <ul className="skills-list">
                                    <li>Feminist eLearning Modules, with Jigna Desai, Ann Fandrey, and Colin McFadden, 2015.</li>
                                    <li>Mapping Immigration History in the Twin Cities, with Sarah Atwood-Hoffman and Kong Pha, 2015. </li>
                                    <li>Word Matters: Narratives of Commercial Sex, Institute for Advanced Study Collaborative project, 2014.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div id="awards">
                                <h3 className="dashed-edge">Selected Awards</h3>
                                <ul className="skills-list">
                                    <li>Steven J. Schochet Interdisciplinary Fellowship in Queer + Trans Studies, 2018-2019</li>
                                    <li>Doctoral Dissertation Fellowship, 2017-2018</li>
                                    <li>Gender Policy Report Fellow, Summer 2017</li>
                                    <li>Critical Data Studies Fellow, Informatics Institute, Summer 2016</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Grid>

            </section>
        );
    }
}
export default Resume; 