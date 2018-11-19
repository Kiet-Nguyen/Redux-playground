import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	state = {
		counter: 0
	}

	counterChangedHandler = ( action, value ) => {
		switch ( action ) {
			case 'inc':
				this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
				break;
			case 'dec':
				this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
				break;
			case 'add':
				this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
				break;
			case 'sub':
				this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
				break;
			default:
				break;
		}
	}

	render () {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
				<CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
				<CounterControl label="Subtract 5" clicked={this.props.onSubstractFiveCounter}  />
				<hr/>
				<button onClick={this.props.onStoreResult}>Store result</button>
				<ul>
					{
						this.props.storeResult.map(result => {
							return (
								<li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
									{result.value}
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter,
		storeResult: state.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
		onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
		onAddFiveCounter: () => dispatch({ type: 'ADD_FIVE', value: 5 }),
		onSubstractFiveCounter: () => dispatch({ type: 'SUBSTRACT_FIVE', value: 5 }),
		onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
		onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultElId: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);