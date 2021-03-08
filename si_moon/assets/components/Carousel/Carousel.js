import React from 'react';
import './css/demo.css';
import './css/style2.css';
import './css/queries.css'

const CarouselHome = () => {
    return (
        <div>
            <ul className="cb-slideshow">
                <li><span>Image 01</span>
                    <div><h3>L'HIVER AUX MERVEILLES</h3></div>
                </li>
                <li><span>Image 02</span>
                    <div><h3>L'HIVER AUX MERVEILLES</h3></div>
                </li>
                <li><span>Image 03</span>
                    <div><h3>S·TR·E·ET ART·</h3></div>
                </li>
                <li><span>Image 04</span>
                    <div><h3>L'HIVER AUX MERVEILLES</h3></div>
                </li>
                <li><span>Image 05</span>
                    <div><h3>LA FABULEUSE HISTOIRE DE LOU</h3></div>
                </li>
                <li><span>Image 06</span>
                    <div><h3>S·TR·E·ET ART·</h3></div>
                </li>
            </ul>
            <div className="container mt-5 titleAdjust">
                <header>
                    <h1 className="changeColor">MOONLIGHT PROJECT |
                        <span className="changeColor1">#émerveillement</span></h1>
                    <h2 className="changeColor1">
                        Projets culturels et événementiels | Son, Lumières & Vidéo | Éducation artistique & Culturelle
                    </h2>
                </header>
            </div>
        </div>

    );
};

export default CarouselHome;