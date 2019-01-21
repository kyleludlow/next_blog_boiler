import Layout from '../components/Layout'
import PostLink from '../components/Posts/PostLink'
import HeroImage from '../components/HeroImage'

import {fetchLatestPosts, getFeaturedImage} from '../api/contentful'

const IndexPage = ({ posts, img }) => {
    return (
        <div>
            <Layout>
                <HeroImage img={img}><img style={{width: '100%'}} src="/static/roam-the-divine-logo-white.png"/></HeroImage>
                <ul>
                    {posts.map((post, index) =>
                        <PostLink title={post.fields.title} key={index}/>
                    )}
                </ul>
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
