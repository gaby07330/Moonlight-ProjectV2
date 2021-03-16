import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import "./Navbar.css";
import "./NavbarJS";
import '../../styles/links.css';

function Navbar() {


    return (
        <div>
            <div id="menu">
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="menu-inner">

                    <ul className="menuSite">
                        <li>
                            <Link className='linkStyle pt-3' component={RouterLink} to="/">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className='linkStyle pt-3' component={RouterLink} to="/">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className='linkStyle pt-3' component={RouterLink} to="/">
                                Artistes
                            </Link>
                        </li>
                        <li>
                            <Link className='linkStyle pt-3' component={RouterLink} to="/">
                                Réalisations
                            </Link>
                        </li>
                        <li>
                            <Link className='linkStyle pt-3' component={RouterLink} to="/">
                                Social Networks
                            </Link>
                        </li>
                        <li>
                            <Link className='linkStyle pt-3' component={RouterLink} to="/">
                                Partenaires
                            </Link>
                        </li>
                        <li>
                            <Link className='linkStyle pt-3' component={RouterLink} to="/">
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>

                <svg version="1.1" id="blob" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path id="blob-path" d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z"/>
                </svg>
            </div>

            {/*<div className="container">
                <h2> hover close to the menu </h2>
                <h1>Bonjour</h1>
            </div>*/}


        </div>
    );
}

export default Navbar;