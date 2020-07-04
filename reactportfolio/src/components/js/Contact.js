import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../../portfolioData';
import "../styles/Contact.css";

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

            <span className='footer'>Developed With ❤ by <a href="https://thomps9012.github.io/ThompsonPortfolio/index.html">Samuel Thompson</a></span>
        </div>);
    }
}

export default Contact;
