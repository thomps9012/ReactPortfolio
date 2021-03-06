import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';

class Header extends Component {
    state = {}

    render() {
        return(
            <div>
                <h1 className='heading-background'>Create!</h1>
                    <header>
                        <h1>
                            <Fade bottom cascade>{data.name}</Fade></h1>
                            <br></br>
                            <img src={data.aboutImage} class ='bioImg' alt='about image'></img>
                    </header>
                    <Fade bottom>
                        <p className='header-title'>
                            {data.headerTagline[0]}<br></br>
                            {data.headerTagline[1]}<br></br>
                            <button><a href='/contact'></a></button>
                        </p>
                    </Fade>
            </div>
        )
    }
}

export default Header;