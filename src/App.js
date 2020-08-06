import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

// components
import Rbc from './orgs/rbc';
import Cbs from './orgs/cbs';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';

function App() {
	return (
		<BrowserRouter>
			< Header />
			<div className='edgepadding'>
				<Switch>
					<Route path='/rbc' component={ Rbc } />
					<Route path='/about' component={ About } />
					<Route path='/cbs' component={ Cbs } />
				</Switch>
				< Footer />
			</div>
       </BrowserRouter>
  );
}

export default App;
