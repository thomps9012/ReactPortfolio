import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class SingleProject extends Component {
    state = {  }
    render() {
        return(
            <Fade bottom>
                <div className='project'>
                <h1>{this.props.title}</h1>
                <img src={this.props.imageSrc} alt='about image'></img>
                    <p>{this.props.description}</p>
                    <p>{this.props.tech}</p>
                    <a href={this.props.url}>Link to Deployed App</a>
                    <br></br>
                    <a href={this.props.repo}>Link to Code Repo</a>
                    
                    
                </div>
            </Fade>
        )
    }
}

export default SingleProject;