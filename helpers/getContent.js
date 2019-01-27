import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

const client = createClient({
    space: 'zcrgayrz1f7o',
    accessToken: '625f2bf0f0ca3cac9eebf3601ef08a47229289c8f6149a0a5acd9907b86a7e8c'
})

const types = [
    'BlogPost'
];

export const getcontent = async () => {
    console.log('> Starting import...')
    for (const type of types) {
        console.log('> Getting content for', type)
        const entries = await client.getEntries({
            content_type: type,
            include: 3
        })
        if (entries.total === 1) {
            const { fields } = entries.items[0]
            fs.writeFileSync(
                path.join(__dirname, '..', 'data', `${type}.json`),
                JSON.stringify(fields)
            )
            console.log('> Content gotten and written for', type)
        }
    }
    return true
}

if (process.argv[2] === 'install') {
    getcontent()
}