import React from 'react';
import '../../services.css'
import './queries_projetCulturel.css'
import logo from '../../../../images/logoMoon.gif'

function ProjetCulturel(props) {

    return (
        <article className="strips__strip">
            <div className="strip__content">
                <h1 className="strip__title h1Services" data-name="Lorem">Projets Culturels & Événementiels</h1>
                <div className="strip__inner-text">
                    <h1 className="h1Projet">Projets Culturels & Événementiels</h1>
                    <p>Le Moonlight Project vous propose l'organisation clef en main ou en collaboration avec vos
                        équipes d'évenements à porté culturelle.
                    </p>

                    <div className="venn-diagram-container">
                        <div className="circle-top-left">
                            <label>
                                <span className="title1">Valorisation du patrimoine</span>
                            </label>
                        </div>
                        <div className="circle-top-right">
                            <label>
                                <span className="title2"> Scénographie</span>
                            </label>
                        </div>
                        <div className="circle-bottom-center-x">
                            <label>
                                <span className="title3">Suppot "Clef en main"</span>
                            </label>
                        </div>
                        <div className="subcircle-top-center-x">
                            <label>
                                <span className="subtitle1">évenements</span>
                            </label>
                        </div>
                        <div className="subcircle-center-left">
                            <label>
                                <span className="subtitle2">Coordination</span>
                            </label>
                        </div>
                        <div className="subcircle-center-right">
                            <label>
                                <span className="subtitle3">Création</span>
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

export default ProjetCulturel;