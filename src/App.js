import './App.css';
import React, { Component } from 'react';
import { AppRoute } from './AppRoute';
import { Navbar } from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
    state = {
        progress: 0
    }

    setProgress = (progress) => {
        this.setState({ progress: progress });
    }

    render() {
        return (
            <>
                <Navbar />
                <LoadingBar 
                    color='#f11946'
                    height='3px'
                    progress={this.state.progress}
                    style={{marginTop:'55px',zIndex:'0'} }
                />
                <AppRoute setProgress={this.setProgress} />
            </>
        )
    }
}

export default App;
