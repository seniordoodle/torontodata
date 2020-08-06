import React, { Component } from 'react';

class Rbc extends Component { 
	render() {
		return ( 
			<div> 
				<p> {this.props.test} RBC section </p>
				
			</div>
		);
	}
}

Rbc.defaultProps = {
	test: 4
}

export default Rbc;


