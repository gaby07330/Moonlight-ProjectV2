import React from 'react';
import './css/demo.css';
import './css/style2.css';
import './css/queries.css'
import AudioPlayerPage from "../Lecteur/AudioPlayer";

const CarouselHome = () => {
    return (
        <div className="contentCarousel">
            <ul className="cb-slideshow zindexSlider">
                <li><span>Image 01</span>
                    <div><h3 className="carouselFontSize">L'HIVER AUX MERVEILLES</h3></div>
                </li>
                <li><span>Image 02</span>
                    <div><h3 className="carouselFontSize">L'HIVER AUX MERVEILLES</h3></div>
                </li>
                <li><span>Image 03</span>
                    <div><h3 className="carouselFontSize">S·TR·E·ET ART·</h3></div>
                </li>
                <li><span>Image 04</span>
                    <div><h3 className="carouselFontSize">L'HIVER AUX MERVEILLES</h3></div>
                </li>
                <li><span>Image 05</span>
                    <div><h3 className="carouselFontSize">LA FABULEUSE HISTOIRE DE LOU</h3></div>
                </li>
                <li><span>Image 06</span>
                    <div><h3 className="carouselFontSize">S·TR·E·ET ART·</h3></div>
                </li>
            </ul>
            <div className="titleAdjust">
                <header>


                    <div className="row">
                        <h2 className="changeColor1 h2Flottant">
                            Projets culturels et événementiels | Son, Lumières & Vidéo | Éducation artistique &
                            Culturelle
                        </h2>
                    </div>
                    <div className="row">

                        <div
                            className=" mb-4 col-lg-8 col-xl-9 justify-content-center justify-content-sm-center d-flex d-sm-flex d-md-flex order-lg-1 order-xl-1">
                            <h1 className="changeColor h1Accueil">MOONLIGHT PROJECT |
                                <span className="changeColor1">#émerveillement</span></h1>

                        </div>
                        <div className="col-lg-4 col-xl-3 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex
                            justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center order-lg-2 justify-content-xl-center order-xl-2">
                            <AudioPlayerPage/>
                        </div>
                    </div>
                </header>
            </div>
        </div>

    );
};

export default CarouselHome;