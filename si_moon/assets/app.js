import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.css";
import Accueil from "./pages/accueil/Accueil";
import Navbar from "./components/Navbar/Navbar";
import logo from "./images/logoMoon.gif";

import 'imagesloaded/imagesloaded.pkgd.min';
import AudioPlayerPage from "./components/Lecteur/AudioPlayer";


console.log("Hello You, C'est parti pour du code !!");

const App = () => {
  return (
      <HashRouter>
        <Navbar/>
        +
        <main className="container-fluid">
          <div className="row">

            <div className="  col-lg-3 col-xl-2 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex
          justify-content-center order-1 justify-content-sm-center order-sm-1 justify-content-md-center
          order-md-1 justify-content-lg-start order-lg-1 justify-content-xl-start order-xl-1 pt-4 moonpadding"
            >
              <img className="imgLogo" src={logo} alt="logoMoon"/>

            </div>

            <div
                className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-10 d-md-flex
                order-3 order-sm-2 order-md-2 order-lg-2 order-xl-2 moonAjust">
              <Switch>
                <Route path="/lec" component={AudioPlayerPage}/>
                <Route path="/" component={Accueil}/>


              </Switch>
            </div>
            <div
                className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 d-md-flex order-4
                order-sm-4 order-md-3 order-lg-3 order-xl-3">
            </div>
            <div
                className="col-md-12 col-lg-8 col-xl-9 d-md-flex order-4 order-sm-3
                order-md-4 order-lg-4 order-xl-4">


            </div>
          </div>

        </main>
      </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App/>, rootElement);
