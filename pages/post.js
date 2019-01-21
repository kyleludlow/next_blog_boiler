import { withRouter } from 'next/router'

import Layout from '../components/Layout'
import Post from '../components/Posts/Post'

import {getPost} from '../api/contentful'


const PostPage = withRouter((props) => (
    <Layout>
        <Post {...props}/>
    </Layout>
))

PostPage.getInitialProps = async ({ query }) => {
    const res = await getPost(query.slug)
    const json = await res.json()
    return { post: json[0] }
}

export default PostPage