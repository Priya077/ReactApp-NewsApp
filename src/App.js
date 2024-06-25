import './App.css';
import React, { Component } from 'react'
import { AppRoute } from './AppRoute'
import {Navbar } from './components/Navbar'
export class App extends Component{
    render() {
        return (
            <>
                <Navbar />
                <AppRoute />
            </>
           
        )
    }
}