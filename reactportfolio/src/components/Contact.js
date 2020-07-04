import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../portfolioData';

class Contact extends Component {
    state = {}
    render() {
        return (<div>
            <h1>
                <Fade bottom cascade> Contact</Fade>
            </h1>
            <Fade bottom>
                <div className='contact-content'>
                    <p>{data.contactEmail}</p>
                    <ul>
                        {data.social.map((link, index) => (
                            <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
            </Fade>
        </div>);
    }
}

export default Contact;
