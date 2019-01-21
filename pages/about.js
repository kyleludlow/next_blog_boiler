import Layout from '../components/Layout'

import {getAboutPageContent} from '../api/contentful'

const AboutPage = ({content}) => {
    return (
        <div>
            <Layout>
                <p>About Me</p>
                <div>
                    {content.content}
                </div>
            </Layout>
        </div>
    )
}

AboutPage.getInitialProps = async ({ req }) => {
    const res = await getAboutPageContent()
    return { content: res }
}

export default AboutPage