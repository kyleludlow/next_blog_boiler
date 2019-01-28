import Layout from '../components/Layout'
import PostLink from '../components/Posts/PostLink'

import { fetchPosts } from '../api/contentful'

const BlogPage = ({ posts }) => {
    return (
        <section className="blog-post style-two pad-75">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <article className="has-animation" data-delay="0">
                            <div className="entry-media">
                                <img src="https://via.placeholder.com/920x371.png" alt="post-image"/>
                            </div>
                            <div className="entry-meta-content">
                                <span className="entry-meta"><span>By</span> <a href="#">Cabe Jeo</a>   <span>in</span>  <a href="#">Beauty, Lifestyle</a> <span>at</span> <a href="#">August 4, 2017</a></span>
                                <h2 className="entry-title"><a href="#">You work your way to creative thinking</a></h2>
                            </div>
                            
                            <div className="entry-content-bottom">
                                <p className="entry-content">Why your minute meal never works out the way you plan. The evolution of foodstuffs. How to cheat at dinner ideas and get away with it. What everyone is saying about dinner ideas. </p>
                                <a href="#" className="entry-read-more"><span></span>Read More</a>
                                <ul className="social-share list-inline">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                </ul>
                                <span className="entry-meta bold float-right">Share</span>
                            </div>
                        </article>

                        <article className="has-animation" data-delay="0">
                            <div className="entry-media">
                                <img src="https://via.placeholder.com/920x371.png" alt="post-image"/>
                            </div>
                            <div className="entry-meta-content">
                                <span className="entry-meta"><span>By</span> <a href="#">Cabe Jeo</a>   <span>in</span>  <a href="#">Beauty, Lifestyle</a> <span>at</span> <a href="#">August 4, 2017</a></span>
                                <h2 className="entry-title"><a href="#">Good design is obvious and transparent</a></h2>
                            </div>
                            
                            <div className="entry-content-bottom">
                                <p className="entry-content">Why your minute meal never works out the way you plan. The evolution of foodstuffs. How to cheat at dinner ideas and get away with it. What everyone is saying about dinner ideas. </p>
                                <a href="#" className="entry-read-more"><span></span>Read More</a>
                                <ul className="social-share list-inline">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                </ul>
                                <span className="entry-meta bold float-right">Share</span>
                            </div>
                        </article>

                        <article className="has-animation" data-delay="0">
                            <div className="entry-media">
                                <img src="https://via.placeholder.com/920x371.png" alt="post-image"/>
                            </div>
                            <div className="entry-meta-content">
                                <span className="entry-meta"><span>By</span> <a href="#">Cabe Jeo</a>   <span>in</span>  <a href="#">Beauty, Lifestyle</a> <span>at</span> <a href="#">August 4, 2017</a></span>
                                <h2 className="entry-title"><a href="#">If you do it right, it will last forever</a></h2>
                            </div>
                            
                            <div className="entry-content-bottom">
                                <p className="entry-content">Why your minute meal never works out the way you plan. The evolution of foodstuffs. How to cheat at dinner ideas and get away with it. What everyone is saying about dinner ideas. </p>
                                <a href="#" className="entry-read-more"><span></span>Read More</a>
                                <ul className="social-share list-inline">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                </ul>
                                <span className="entry-meta bold float-right">Share</span>
                            </div>
                        </article>

                        <article className="has-animation" data-delay="0">
                            <div className="entry-media">
                                <img src="https://via.placeholder.com/920x371.png" alt="post-image"/>
                            </div>
                            <div className="entry-meta-content">
                                <span className="entry-meta"><span>By</span> <a href="#">Cabe Jeo</a>   <span>in</span>  <a href="#">Beauty, Lifestyle</a> <span>at</span> <a href="#">August 4, 2017</a></span>
                                <h2 className="entry-title"><a href="#">Its no secret that the digital industry is booming</a></h2>
                            </div>
                            
                            <div className="entry-content-bottom">
                                <p className="entry-content">Why your minute meal never works out the way you plan. The evolution of foodstuffs. How to cheat at dinner ideas and get away with it. What everyone is saying about dinner ideas. </p>
                                <a href="#" className="entry-read-more"><span></span>Read More</a>
                                <ul className="social-share list-inline">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                </ul>
                                <span className="entry-meta bold float-right">Share</span>
                            </div>
                        </article>

                        <article className="has-animation" data-delay="0">
                            <div className="entry-media">
                                <img src="https://via.placeholder.com/920x371.png" alt="post-image"/>
                            </div>
                            <div className="entry-meta-content">
                                <span className="entry-meta"><span>By</span> <a href="#">Cabe Jeo</a>   <span>in</span>  <a href="#">Beauty, Lifestyle</a> <span>at</span> <a href="#">August 4, 2017</a></span>
                                <h2 className="entry-title"><a href="#">Ways your mother lied to you about food stuffs</a></h2>
                            </div>
                            
                            <div className="entry-content-bottom">
                                <p className="entry-content">Why your minute meal never works out the way you plan. The evolution of foodstuffs. How to cheat at dinner ideas and get away with it. What everyone is saying about dinner ideas. </p>
                                <a href="#" className="entry-read-more"><span></span>Read More</a>
                                <ul className="social-share list-inline">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                </ul>
                                <span className="entry-meta bold float-right">Share</span>
                            </div>
                        </article>
                        

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-md-4 col-xs-2">
                                <a href="#" className="left-button"><img src="images/left-botton.png" alt="left-button"/></a>
                            </div>
                            <div className="col-md-4 col-xs-8 text-center">
                                <ul className="page-nav text-center list-inline">
                                    <li className="list-inline-item"><a className="active" href="#">1</a></li>
                                    <li className="list-inline-item"><a href="#">2</a></li>
                                    <li className="list-inline-item"><a href="#">3</a></li>
                                    <li className="list-inline-item"><a href="#">4</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-xs-2 text-right">
                                <a href="#" className="left-button"><img src="images/right-button.png" alt="right-button"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

BlogPage.getInitialProps = async ({ req }) => {
    const res = await fetchPosts();
    return { posts: res }
}

export default BlogPage;
