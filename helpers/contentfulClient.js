import { createClient } from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

const ContentfulClient = createClient({
    space: 'm2dkdjsf2sd8',
    accessToken: '62eac09be8d04ece6619bf02ef347caed78460c0383c8d50295d5f5b6f4c8de0'
})
 export default ContentfulClient;
