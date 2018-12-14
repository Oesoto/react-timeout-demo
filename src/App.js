import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.idleTimer = null;
    }

    _onAction = e => {
        console.log('user did something', e);
        console.log('time remaining', this.idleTimer.getRemainingTime());
    };

    _onActive = e => {
        console.log('user is active', e);
        console.log('time remaining', this.idleTimer.getRemainingTime());
    };

    _onIdle = e => {
        console.log('user is idle');
        console.log('last active', this.idleTimer.getLastActiveTime());
        console.log('is idle', this.idleTimer.isIdle());
    };

    clickHandler = e => {
        e.preventDefault();
        console.log('Learn react link clicked');
    };

    render() {
        return (
            <div className="App">
                <IdleTimer
                    ref={ref => {
                        this.idleTimer = ref;
                    }}
                    element={document}
                    onActive={this._onActive}
                    onIdle={this._onIdle}
                    onAction={this._onAction}
                    debounce={250}
                    // timeout={1000 * 60 * 0.5}
                    timeout={4000}
                />
                <header className="App-header">
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" onClick={this.clickHandler}>
                        Learn React. Click here
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
