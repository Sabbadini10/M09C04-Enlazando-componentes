import React from 'react';
import "../assets/css/app.css"
import { Route, Switch } from 'react-router-dom'
import SideBar from './SideBar';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './error/Error404';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Switch>
              <Route path="/" exact={true} component={ContentWrapper}></Route>
              <Route path="/pages" exact={true} component={GenresInDb}></Route>
              <Route path="/charts" exact={true} component={LastMovieInDb}></Route>
              <Route path="/tables" exact={true} component={ContentRowMovies}></Route>
              <Route path="/" component={Error404}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;