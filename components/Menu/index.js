const Menu = ({}) => (
    <section className="menu-title">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-3 col-md-12 col-xl-3 text-center pt-2">
					<a href="index.html" className="logo"><img src="images/logo-2.png" alt="logo"/></a>
					<a href="#" className="menu-click"><span></span><span></span><span></span></a>
				</div>
				<div className="col-lg-6 col-xl-6">
					<nav id="main-menu" className="text-center">
						<ul>
							<li className="has-child"><a href="index.html">Home</a>
								<ul className="level-two">
									<li><a href="home-v2.html">Home 1</a></li>
									<li><a href="home-v3.html">Home 2</a></li>
									<li><a href="home-v4.html">Home 3</a></li>
									<li><a href="home-v5.html">Home 4</a></li>
									<li><a href="home-v6.html">Home 5</a></li>
									<li><a href="home-v7.html">Home 6</a></li>
									<li><a href="home-v8.html">Home 7</a></li>
									<li><a href="home-v9.html">Home 8</a></li>
									<li><a href="home-v10.html">Home 9</a></li>
									<li><a href="home-v11.html">Home 10</a></li>
									<li><a href="home-v12.html">Home 11</a></li>
								</ul> 
							</li>
							<li><a href="category.html">Category</a></li>
							<li className="has-child"><a href="#">Pages</a>
								<ul className="level-two">
									<li><a href="single.html">Single 1</a></li>
									<li><a href="single-v2.html">Single 2</a></li>
									<li><a href="single-v3.html">Single 3</a></li>
									<li><a href="single-v4.html">Single 4</a></li>
									<li><a href="404.html">404 page</a></li>
								</ul>
							</li>
							<li><a href="about.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</nav>
				</div>
				<div className="col-sm-3 col-lg-3 text-center col-xl-3">
					<ul className="soical-icon-font list-inline">
						<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-heart"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
)

export default Menu;