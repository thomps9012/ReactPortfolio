import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class SingleProject extends Component {
    state = {  }
    render() {
        return(
            <Fade bottom>
                <div className='project'>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageSrc} class ='projImg' alt='about image'></img>
                    <p>{this.props.description}</p>
                    <p>{this.props.tech}</p>
                    <a target='_blank' rel="noopener noreferrer" href={this.props.url}>Link to Deployed App</a>
                    <br></br>
                    <a target='_blank' rel="noopener noreferrer" href={this.props.repo}>Link to Code Repo</a>
                    
                    
                </div>
            </Fade>
        )
    }
}

export default SingleProject;