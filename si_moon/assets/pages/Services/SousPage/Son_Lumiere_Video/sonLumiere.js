import React from 'react';
import logo from "../../../../images/logoMoon.gif";
import './SonLumiere.css';
import './queries_SonLumiereVideo.css'

function SonLumiere(props) {
    return (
        <article className="strips__strip">
            <div className="strip__content">
                <h1 className="strip__title h1Services" data-name="Lorem">Son, Lumières, Vidéos</h1>
                <div className="strip__inner-text">
                    <h1 className="h1Projet">Son, Lumières, Vidéos</h1>
                    <p>Le Moonlight Project interviens dans toutes création d'illumination monumentales, le ViJing &
                        mapping,
                        les composition musicales originales (OST, Sound Design) et les captation/diffusion Live.
                    </p>

                    <div className="venn-diagram-container">
                        <div className="circle-top-left">
                            <label>
                                <span className="title1 title1Son">Illumination monumentale</span>
                            </label>
                        </div>
                        <div className="circle-top-right">
                            <label>
                                <span className="sonTitle2 title2"> Scénographie immersive</span>
                            </label>
                        </div>
                        <div className="circle-bottom-center-x">
                            <label>
                                <span
                                    className=" sonTitle4 title4 text-center">Composition musicale <br/>Sound Design</span>
                                <span className="studio">Studio d'enregistrement</span>
                            </label>
                        </div>
                        <div className="subcircle-top-center-x">
                            <label>
                                <span className="subtitle1 sonSubTitle1">Mapping</span>
                            </label>
                        </div>
                        <div className="subcircle-center-left2 subcircle-center-left">
                            <label>
                                <span className=" sonsubtitle subtitle2">Captation vidéo</span>
                            </label>
                        </div>
                        <div className="subcircle-center-right">
                            <label>
                                <span className="subtitle3Son  subtitle3">ViJing</span>
                            </label>
                        </div>
                        <div className="subsubcircle-center-x-y">
                            <img className="imgLogoProjet" src={logo} alt="logoMoon"/>
                        </div>
                    </div>

                    <p>
                        <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"> </i></a>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default SonLumiere;