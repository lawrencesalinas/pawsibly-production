import React from 'react';

function Footer() {
  return <div>
      <footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">About</h5>
							<p className="grey-text text-lighten-4">We are three software developers who wanted to create an easy and reliable source
								for pet owners to find a caretaker when they're busy or traveling. </p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Contributors</h5>
							<ul>
								<li><a className="grey-text text-lighten-3" style={{ 'textDecoration': 'none' }} href="https://github.com/galyverasi">Galyver Asi</a></li>
								<li><a className="grey-text text-lighten-3" style={{ 'textDecoration': 'none' }} href="https://github.com/kellylarrea">Kelly Larrea</a></li>
								<li><a className="grey-text text-lighten-3" style={{ 'textDecoration': 'none' }} href="https://github.com/lawrencesalinas">Lawrence Salinas</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						© 2022 Pawsibly
						<a className="grey-text text-lighten-4 right" style={{ 'textDecoration': 'none' }} href="https://github.com/kellylarrea/pawsibly-react">Learn more on GitHub</a>
					</div>
				</div>
			</footer>
  </div>;
}

export default Footer;
