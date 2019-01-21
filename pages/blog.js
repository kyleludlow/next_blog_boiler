import Layout from '../components/Layout'
import PostLink from '../components/Posts/PostLink'

import { fetchPosts } from '../api/contentful'

const BlogPage = ({ posts }) => {
    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ul>
                    {posts.map((post, index) =>
                        <PostLink title={post.fields.title} key={index} />
                    )}
                </ul>
            </Layout>
        </div>
    )
}

BlogPage.getInitialProps = async ({ req }) => {
    const res = await fetchPosts()
    return { posts: res }
}

export default BlogPage
