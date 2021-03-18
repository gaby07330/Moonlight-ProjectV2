import React from 'react';
import './services.css'
import './SousPage/Projet_Culturel/queries_projetCulturel.css'
import './servicesJS';
import ProjetCulturel from './SousPage/Projet_Culturel/projetCulturel';
import SonLumiere from './SousPage/Son_Lumiere_Video/sonLumiere';
import Education from './SousPage/education';


function Services() {


    return (

        <section className="strips">

            <ProjetCulturel/>
            <SonLumiere/>
            <Education/>

            <i className="fa fa-close strip__close"> </i>

        </section>

    );
}


export default Services;
