import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <div className="req-foot">
            <Link to='/request' className='foot-req-btn'>
                Submit A Request
            </Link>
        </div>
        <div className='other-tech'>
            <h3>Other Technologies</h3>
            <div className='other-tech-list'>
                <a href='https://www.crypto.ait-tt.com' target='_blank'>AIT Crypto</a>
                {/* <Link to='crypto.ait-tt.com'>AIT Crypto</Link> */}
                <a href='#' target='_blank'>Website Portfolio</a>
            </div>
        </div>
        <div class="contact">
            <h3>Contact Us</h3>
            <div className='contact-info'>
                <p>Email: taran.ramjit@gmail.com</p>
                <p>Telephone: 868-644-1088</p>
                <p>
                    20 Dades Extension Trace #2 <br />
                Tabaquite Road <br />
                Rio Claro <br />
                Trinidad & Tobago
            </p>
            </div>

        </div>
        <div class="media-wrapper">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-youtube-square"></i>
        </div>
    </div>
);

export default Footer;