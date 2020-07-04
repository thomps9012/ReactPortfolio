import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class Skills extends Component {
    state = {  }
    render() {
        return (<div className='Resume'>
        <h1><Fade bottom cascade>Resume</Fade></h1>
        <Fade bottom>
        <iframe src="../../public/Samuel Thompson CV.pdf" width="500" height="700" class="CV"></iframe>
        </Fade>
        </div>);
    }

}
export default Skills;