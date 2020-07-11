import React, { Component } from 'react';
import SingleProject from './SingleProject';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';

class Projects extends Component {
    state = { }
    render () {
        return(
            <div>
                <h1 className='heading'>
                    <Fade bottom cascade>Projects</Fade>
                </h1>
                <div className='projects-content'>
                    {data.projects.map((project)=>(
                        <SingleProject key={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            imageSrc={project.imageSrc}
                            url={project.url}
                            repo={project.repo}>
                        </SingleProject>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;