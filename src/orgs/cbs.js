import React, { Component } from 'react';

class Cbs extends Component { 

	constructor() {
		super();
		this.state= {
			count:0
		}
	}

	incrementCount = () => {
		this.setState({
			count:this.state.count+1
		})
	}

	decrementCount = () => {
		this.setState({
			count:this.state.count-1
		})
	}

	render(test) 
	{
		let { count } = this.state;
		return ( 
			<div>
				<div className="count">
					<h3>Count:</h3>
					<h1>{count}</h1>
				</div>
				<h2>Count: { count } </h2>
				<button onClick = { () => this.incrementCount() }> </button>
				<button onClick = { () => this.decrementCount() }> </button>
			</div>
		)
	}
}


export default Cbs;


