import React, { Component } from 'react';
import kidneypic from '..\\Infograph\\InfoKidney.png';

class Home extends Component { 
	render() {
		return ( 
			<div> 
                <p>  HOME section </p>
				<img className='infoImg' alt='' src={kidneypic} ></img>
			</div>
		);
	}
}


export default Home;


