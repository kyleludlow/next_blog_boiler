import Layout from '../components/Layout'
import Posts from '../components/Posts/Posts'
import HeroImage from '../components/HeroImage'

import { fetchLatestPosts, getFeaturedImage, fetchHomePagePosts } from '../api/contentful'
const IndexPage = ({ posts, img }) => {
    return (
        <div>
            <Layout>
                <HeroImage img={img}><img style={{width: '100%'}} src="/static/roam-the-divine-logo-white.png"/></HeroImage>
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
                </div>
            </Layout>
            <style jsx>{`
            .container {
                margin: 0 auto;
            }
            .flex-wrapper {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                margin: 40px;
            }
            .button__container {
                display: flex;
                justify-content: center;
            }
            @media (max-width: 400px) {
                .flex-wrapper {
                    display: block;
                }
            }
            `}</style>
        </div>
    )
}

IndexPage.getInitialProps = async ({ req }) => {
    const posts = await fetchLatestPosts()
    const img = await getFeaturedImage()
    const featuredPosts = await fetchHomePagePosts()
    console.log('breh', featuredPosts)
    return {
        posts: posts,
        img: img
    }
}

export default IndexPage
