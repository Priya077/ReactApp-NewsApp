import React, { Component } from 'react'
import {NewsItem } from './NewsItem'
export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewsReader - Top Headlines</h2>
                <NewsItem/>
                <NewsItem/>
                
            </div>
        )
    }
}