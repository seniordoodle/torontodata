import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactGA from 'react-ga';


// components
import Rbc from './orgs/rbc';
import Cbs from './orgs/cbs';
import Home from './orgs/home';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import { useEffect } from 'react';


function App() {
	useEffect(() => {
		ReactGA.initialize('UA-175166375-1')

		// To report page view
		ReactGA.pageview('/app')
	}, [])

	return (
		<BrowserRouter>
			< Header />
			<div className='edgepadding'>
				<p> Hello! <p/>
				<Home/>
				<Switch>
					<Route path='/home' component={ Home } />
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
