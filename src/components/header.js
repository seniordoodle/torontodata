import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header_01">
			<NavLink exact to='/Home'> Home </NavLink> 
			<NavLink exact to='/rbc'> RBC </NavLink> 
			<NavLink exact to='/about'> about </NavLink> 
			<NavLink exact to='/cbs'> CBS </NavLink> 
		</div>
	)
}

export default Header;

