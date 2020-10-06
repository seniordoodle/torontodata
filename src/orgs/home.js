import React, { Component } from 'react';
import kidney from '../Infograph/InfoKidney.png';

class Rbc extends Component { 
	render() {
		return ( 
			<div> 
				<img className='MainImg' alt="" src={kidney} />
			</div>
		);
	}
}

Rbc.defaultProps = {
	test: 4
}

export default Rbc;


