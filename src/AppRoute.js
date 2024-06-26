import './App.css';
import React, { Component } from 'react'
import {About} from './components/About'
import {News } from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class AppRoute extends Component {
    api_key = process.env.REACT_APP_NEWS_API_KEY
   

    render() {
        return (
            <>
            <Router>
                <Routes>

                    <Route path="/" element={<News api_key={this.api_key} setProgress={this.props.setProgress} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/general" element={<News api_key={this.api_key} setProgress={this.props.setProgress} category='general'/>} />
                    <Route path="/business" element={<News api_key={this.api_key} setProgress={this.props.setProgress} category='business' />} />
                    <Route path="/entertainment" element={<News api_key={this.api_key} setProgress={this.props.setProgress} category='entertainment' />} />
                    <Route path="/health" element={<News api_key={this.api_key} setProgress={this.props.setProgress} category='health' />} />
                    <Route path="/science" element={<News api_key={this.api_key} setProgress={this.props.setProgress} category='science' />} />
                    <Route path="/sports" element={<News api_key={this.api_key} setProgress={this.props.setProgress} category='sports' />} />
                    <Route path="/technology" element={<News api_key={this.api_key} setProgress={this.props.setProgress} category='technology' />} />

                </Routes>
            </Router >
           
            </>
        )
    }
}