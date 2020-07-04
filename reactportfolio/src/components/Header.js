import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>Think Global, Act Local</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               </p>
            </Fade>



        </div>);
    }
}

export default Header;