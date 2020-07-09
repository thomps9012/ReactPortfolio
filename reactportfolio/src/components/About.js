import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';

class About extends Component {
    state = {  }
    render() {
        return(
            <div className='about'>
                <h1><Fade bottom cascade>Samuel Thompson</Fade></h1>
                <Fade bottom>
                    <p>{data.abouttext}</p>
                    <p>{data.languages}</p>
                    <p>{data.frameworks}</p>
                </Fade>
                {data.ShowAboutImage ? <img src={data.aboutImage} alt='about image'></img> : null}
            </div>
        );
    }
}

export default About;