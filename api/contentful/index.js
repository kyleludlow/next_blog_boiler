import fetch from 'isomorphic-fetch'

import ContentfulClient from '../../helpers/contentfulClient'

export const fetchHomePagePosts = async () => {
    const entries = await ContentfulClient.getEntries({
        content_type: 'blogPost',
        limit: 6,
    })
    if (entries.total === 1) {
        const { fields } = entries.items[0];
        return fields;
    } else if (entries.total > 1) {
        return entries.items;
    }
    return false;
}

export const fetchLatestPosts = async () => {
        const entries = await ContentfulClient.getEntries({
            content_type: 'blogPost',
            limit: 6
        })
        if (entries.total === 1) {
            const { fields } = entries.items[0];
            return fields;
        } else if (entries.total > 1) {
            return entries.items;
        }
        return false;
}

export const fetchPosts = async () => {
    const entries = await ContentfulClient.getEntries({
        content_type: 'blogPost'
    })
    if (entries.total === 1) {
        const { fields } = entries.items[0]
        return fields;
    } else if (entries.total > 1) {
        return entries.items;
    }
    return false;
}

export const getPost = (slug) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
}


export const getAboutPageContent = async () => {
    const entries = await ContentfulClient.getEntries({
        content_type: 'pageAbout'
    })
    if (entries.total === 1) {
        const { fields } = entries.items[0]
        return fields;
    } else if (entries.total > 1) {
        return entries.items;
    }
    return false
}

// export const getFeaturedImage = async () => {
//     const entries = await ContentfulClient.getEntries({
//         content_type: 'featuredImage'
//     })
//     if (entries.total === 1) {
//         const { fields } = entries.items[0];
//         return fields;
//     }
//     return false;
// }