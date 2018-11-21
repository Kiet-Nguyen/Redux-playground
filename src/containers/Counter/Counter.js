import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/index';

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
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onAddFiveCounter: () => dispatch(actionCreators.addFive(5)),
		onSubstractFiveCounter: () => dispatch(actionCreators.substractFive(5)),
		onStoreResult: (value) => dispatch(actionCreators.storeResult(value)),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);