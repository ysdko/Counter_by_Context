import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './contexts/counter'
import Counter from './components/counter'
import './index.css';

import * as serviceWorker from './serviceWorker';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)

		this.state = {
			count: 0,
			increment: this.increment,
			decrement: this.decrement
		}
	}

	increment() {
		this.setState({ count: this.state.count + 1 })
	}

	decrement() {
		this.setState({count: this.state.count - 1})
	}

	render() {
		return (
			<CounterContext.Provider value={this.state}>
        <Counter />
			</CounterContext.Provider>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
