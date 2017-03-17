import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './sass/main.scss';

const App = ({children}) => (
    <div>
        <div className="navbar">
            <Link className="nav-link" to="/">Event</Link>
            <Link className="nav-link" to="#">The Crew</Link>
            <Link className="nav-link" to="/partners">Partners</Link>
            <Link className="nav-link" to="#">Kontakt</Link>
        </div>

        <div className="hero">
            <div className="overlay"></div>
            <div className="logo-container">
                <h1>INTROX</h1>
            </div>
            <div className="intro-text-container">
                <div className="top-text">
                    <h2>Ljud & Ljus</h2>
                    <h2>Scen & Bild</h2>
                    <h2>Artister</h2>
                    <h2>Catering</h2>
                    <h2>Speaker</h2>
                    <h2>Konferencier</h2>
                </div>
                <h3>
                    Vi erbjuder dig och ditt företag eller förening hjälp med att skapa lösningar för event,
                    fester eller andra typer av evenemang.
                    <br/>
                    Tillsammans hittar vi helhetslösningar eller
                    delar för ert event med målet att kostnadseffektivt ha hög kvalité, utomordentlig service och
                    fantastisk underhållning för dig och gästerna!
                    <br/>
                    Vi har jobbat i 15 år med olika festivaler, event och musikunderhållning.
                </h3>
            </div>
        </div>

        <div className="page-content">
            { children }
        </div>

        <div className="dancers-wrapper">
            <div className="dancers"></div>
        </div>
        <footer>
            <div className="contact">
                <h3>Kontakt</h3>
                <p>Roger Last</p>
                <p>0707070707</p>
            </div>
            <div className="social-media">
                <h3>Sociala medier</h3>
                <p>FB INSTA</p>
            </div>
            {/*<i className="fa fa-copyright" aria-hidden="true"> Introx 2017</i>*/}
        </footer>
    </div>
);

const Costumers = () =>
    ( <div className="costumers">
            <h1>Ett axplock av våra kunder</h1>
            <img className="costumer-image" src={require('./assets/peace.png')}/>
            <img className="costumer-image" src={require('./assets/bilforum.png')}/>
            <img className="costumer-image" src={require('./assets/wayoutwest.png')}/>
            <img className="costumer-image" src={require('./assets/sdalen.png')}/>
        </div>
    );


render((
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Costumers }/>
                <Route path="/partners" component={ Costumers }/>
            </Route>
        </Router>),
    document.getElementById('root')
);



