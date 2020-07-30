import React from 'react';
import "./reset.css";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Error404 from "./Components/Error404/Error404";
import BlogPage from "./Components/BlogPage/BlogPage";
import TestPage from "./Components/TestPage/TestPage";
import Contacts from "./Components/Contacts/Сontacts";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route  path="/" component={MainPage} exact/>
        <Route  path="/error" component={Error404} exact/>
        <Route path="/blog" component={BlogPage} exact />
        <Route path="/mainpage" component={MainPage} exact />
        <Route path="/blog-test" component={TestPage} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/about" component={AboutPage} exact />
      </div>
    </Router>
  );
}

export default App;
