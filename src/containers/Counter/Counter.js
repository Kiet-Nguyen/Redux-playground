import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actions';

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
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
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
		ctr: state.ctr.counter,
		storeResult: state.res.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
		onAddFiveCounter: () => dispatch({ type: actionTypes.ADD_FIVE, value: 5 }),
		onSubstractFiveCounter: () => dispatch({ type: actionTypes.SUBSTRACT_FIVE, value: 5 }),
		onStoreResult: (value) => dispatch({ type: actionTypes.STORE_RESULT, value: value }),
		onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);