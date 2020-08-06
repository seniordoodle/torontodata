import React, { Component } from 'react';

var count = 0;

class Cbs extends Component { 

	handleClick = (count) => {
		count = count + 1;
		console.log(count);
	}

	render(test) {
		return ( 
			<div> 
				<p> Canadian Blood Services section </p>
                <button onClick={() => this.handleClick(count)}>Click Me</button>;
			</div>
		)
	}
}


export default Cbs;


