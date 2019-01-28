import Layout from '../components/Layout'
// import Posts from '../components/Posts/Posts'
import Footer from '../components/Footer'
import Preload from '../components/Preload'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Posts from '../components/Posts/Posts.js'

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
                <link rel="stylesheet" href="static/style.css" type="text/css" media="all"/>

                <link rel="stylesheet" href="static/font-awesome.min.css"/>
                <link rel="stylesheet" href="static/owl.carousel.min.css"/>
                <link rel="stylesheet" href="static/owl.theme.default.min.css"/>

            </Head>
            <Layout>
                <Preload/>
                <Menu/>
                <Header/>
                <Posts/>

                {/* <div className="container"
                    </section> */}
                    <Footer/>
                    
                {/* </div> */}
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
    // const img = await getFeaturedImage();
    const featuredPosts = await fetchHomePagePosts();
    return {
        posts: posts,
        // img: img
    };
}

export default IndexPage;
