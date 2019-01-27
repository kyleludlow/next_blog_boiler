const Header = ({}) => (
	<section className="top-header style-seven pad-top-150 pad-bottom-150 bg-pattern-2 mt-0 mb100">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-xl-8 offset-xl-2 text-center">
					<h1 className="has-animation" data-delay="10">Hello, my name is Cabe Deo</h1>
					<p className="has-animation" data-delay="20"> I'm a developer based in Paris,have a look at my Portfolio below.</p>
					<ul className="social-text light list-inline has-animation" data-delay="30">
						<li className="list-inline-item"><a className="text-facebook" href="#">facebook</a></li>
						<li className="list-inline-item"><a className="text-twiiter" href="#">Twitter</a></li>
						<li className="list-inline-item"><a className="text-linkedin" href="#">Linkedin</a></li>
						<li className="list-inline-item"><a className="text-instagram" href="#">Instagram</a></li>
					</ul>
				</div>

			</div>
		</div>
		<div className="logo-profile"><img src="https://via.placeholder.com/400x400.png" alt="profile-logo"/></div>
	</section>
);

export default Header;