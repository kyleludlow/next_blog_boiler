import { createClient } from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

const ContentfulClient = createClient({
    space: 'zcrgayrz1f7o',
    accessToken: 'ee4ed930dc9ca7b0f087334b6239772e05accfc39a44df9fe6bb442bfb4e605b'
})
 export default ContentfulClient;
