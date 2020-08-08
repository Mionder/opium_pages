import React from 'react';
import "./reset.css";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error404 from "./Components/Error404/Error404";
import BlogPage from "./Components/BlogPage/BlogPage";
import TestPage from "./Components/TestPage/TestPage";
import Contacts from "./Components/Contacts/Сontacts";
import AboutPage from "./Components/AboutPage/AboutPage";
import FindPage from "./Components/FindPage/FindPage";

function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch>
            <Route  path="/" component={MainPage} exact/>
            <Route path="/blog" component={BlogPage} exact />
            <Route path="/mainpage" component={MainPage} exact />
            <Route path="/blog-test" component={TestPage} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/find" component={FindPage} exact />
            <Route  component={Error404}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;