import React from 'react';
import './services.css'
import './queries_services.css'
import './servicesJS';
import ProjetCulturel from './SousPage/projetCulturel';
import SonLumiere from './SousPage/sonLumiere';
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
