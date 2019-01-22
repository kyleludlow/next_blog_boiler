import Layout from '../components/Layout'
import Posts from '../components/Posts/Posts'
import HeroImage from '../components/HeroImage'

import {fetchLatestPosts, getFeaturedImage} from '../api/contentful'

const IndexPage = ({ posts, img }) => {
    return (
        <div>
            <Layout>
                <HeroImage img={img}><img style={{width: '100%'}} src="/static/roam-the-divine-logo-white.png"/></HeroImage>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px'}}>
                    {posts.map((post, index) =>
                        <Posts post={post} index={index}/>
                    )}
                </div>
            </Layout>
        </div>
    )
}

IndexPage.getInitialProps = async ({ req }) => {
    const posts = await fetchLatestPosts()
    const img = await getFeaturedImage()
    return {
        posts: posts,
        img: img
    }
}

export default IndexPage
