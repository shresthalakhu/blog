import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import './App.css';
import NavBar from './nav/NavBar';
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="menu"><NavBar /></div>
      <div className="page-body">
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about"  component={AboutPage} />
            <Route path="/article/:name"  component={ArticlePage} />
            <Route path="/article-list"  component={ArticleListPage} />
            <Route component={NotFoundPage} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
