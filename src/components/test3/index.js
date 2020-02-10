import React, { Component } from 'react';



class MoveButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Click To Move
            </button>
        );
    }
}

class BoxOne extends React.Component {
    render() {
        return (
            <div className="boxOne-container">
                Box1
            </div>
        );
    }
}

class BoxTwo extends React.Component {
    render() {
        return (
            <div className="boxTwo-container">
                Box2
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { pos: 0 }
    }
    onClick() {
        this.setState({ pos: (this.state.pos + 1) % 3 })
    }
    render () { 
        return (
            <div>
                { this.state.pos === 0 ? <MoveButton onClick={this.onClick.bind(this)}/> : ''}
                <BoxOne />
                { this.state.pos === 1 ? <MoveButton onClick={this.onClick.bind(this)}/> : ''}
                <BoxTwo />
                { this.state.pos === 2 ? <MoveButton onClick={this.onClick.bind(this)}/> : ''}
            </div>
        );
    }
}

function TestThree() {
    return (
        <App />
    );
}

export default TestThree