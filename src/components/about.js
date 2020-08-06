import React, { Component } from 'react';
import '../index.css';

class About extends Component  {

	static temp = () => {
		console.log('a');
	}
	
	render () {
		return (
			<section>
				<div className='objective-01'>
					<p> Objective and current projects </p>
				</div>
				<div className='abt-tilemain'>
					<div className='abt-tile' >
						<div className='frontabt-tile'>
							<h3> BI Production Support </h3>
							<h4> Montreal - Oct 2018/July 2019 </h4>
							<h5> Bell Canada </h5>
							<p> Project managed multiple assignments, involving communicating with key business stakeholders to gather requirements	and maintaining schedules. </p> 
							<p>	Supported server outages and backups by reviewing logs and correcting the potential errors. </p>
							<p> Corrected urgent and live errors that caused production failures. </p> 
							<p> Wrote and reviewed internal development guidelines - over 40 pages of material. </p>
						</div>
					</div>
					<div className='abt-tile' >
						<div className='frontabt-tile'>
						<h3> BI Developer </h3>
						<h4> Toronto - Sept 2017/Oct 2018 </h4>
						<h5> Bell Canada </h5>
						<p> Led a team to optimize Teradata Database queries and SQL statements, involving 10 developers and a support team, sometimes improving effectiveness by 75%. </p> <p>
						Built resource usage review tool that saved the development team 5 hours of work a week (20 member team). </p> <p>
						Managed interns and co-op students, focusing on fundamentals and core competencies - including on-boarding and creating training material. </p> <p>
						Communicated with stakeholders to gather requirements for projects as an ad-hoc project manager. </p>
						</div>
					</div>
					<div className='abt-tile' >
						<div className='frontabt-tile'>
						<h3> Jr. Web Developer </h3>
						<h4> Toronto - Summer 2016 </h4>
						<h5> Government of Ontario </h5>
						<p> Built dashboards using JS, Sharepoint, and JQuery that summarized expense reports of contractors and other external resources for auditing purposes. </p> <p>
						Contributed to internal knowledge base documentation of personal project for future development. </p> <p> 
						Key member of giving initiative to raise money for Autism Speaks - over $1,000 raised. </p>
					</div>
					</div>
				</div>
			<div className='tile-02' >
				<div className='supportwork-01' >
					<h4> President - Queen's (University) eSports Association -- Kingston, ON - Mar 2014/Apr 2017</h4>
					<p> Mentored incoming executive members - developed on-boarding manuals and policy guidelines </p> 
					<p>	Organized and reviewed annual budgets of up to $1,000 per year. </p>
					<p> Planned and ran events of up to 100 people, involving sponsors, the local community, and the university.</p>
				</div>
			</div> 
		</section >
		)
	}
}


export default About;


