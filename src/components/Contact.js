import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';

class Contact extends Component {
    state = {  }
    render() {
        return ( 
            <div>
                <h1>
                    <Fade bottom cascade>Contact Info</Fade>
                </h1>
                <Fade bottom>
                    <div className='contact-content'>
                        <h1>
                            Let's create<br></br>
                            <span className='amazing-color'>something awesome together!</span></h1>
                            <p>{data.contactEmail}</p>
                            <p>{data.contactPhone}</p>
                            <ul>{data.social.map((link,index) =>(
                                <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                            ))}
                            </ul>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Contact;