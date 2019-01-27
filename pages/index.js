import Layout from '../components/Layout'
import Posts from '../components/Posts/Posts'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Preload from '../components/Preload'
import Menu from '../components/Menu'

import Head from 'next/head'

import { fetchLatestPosts, getFeaturedImage, fetchHomePagePosts } from '../api/contentful'
const IndexPage = ({ posts, img }) => {
    return (
        <div>
            <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <title>Cabe - Minimal and Clean Personal Blog Template</title>
                <meta name="description" content="Cabe - Minimal and Clean Personal Blog Template"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png"/>

                {/* <!-- STYLESHEETS --> */}
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet"/>
                <link rel="stylesheet" href="static/bootstrap.min.css" type="text/css" media="all"/>

                <link rel="stylesheet" href="static/font-awesome.min.css"/>


                <link rel="stylesheet" href="static/owl.carousel.min.css"/>
                <link rel="stylesheet" href="static/owl.theme.default.min.css"/>
                <link rel="stylesheet" href="static/style.css" type="text/css" media="all"/>

            </Head>
            <Layout>
                <Preload/>
                <Menu/>

                {/* <HeroImage img={img}><img style={{width: '100%'}} src="/static/roam-the-divine-logo-white.png"/></HeroImage> */}
                <div className="container">
                    <section className="featured-posts">
                        <div className='flex-wrapper'>
                            {posts.map((post, index) =>
                                <Posts post={post} index={index}/>
                                )}
                        </div>
                    </section>
                    <div className="button__container">
                        <input className="button button--lg button--lg-primary" type="button" value="older posts"/>
                    </div>
                    <section className="instagram-section">
                    </section>
                    <Footer/>
                    
                </div>
                <script src="static/jquery-1.12.3.min.js"></script>
                <script src="static/popper.min.js"></script>
                <script src="static/plugin.js"></script>
                <script src="static/main.js"></script>
            </Layout>
        </div>
    )
}

IndexPage.getInitialProps = async ({ req }) => {
    const posts = await fetchLatestPosts();
    const img = await getFeaturedImage();
    const featuredPosts = await fetchHomePagePosts();
    return {
        posts: posts,
        img: img
    };
}

export default IndexPage
