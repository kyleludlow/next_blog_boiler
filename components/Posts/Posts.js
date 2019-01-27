import PostLink from './PostLink'

import moment from 'moment'


const Posts = ({post}) => {
    const title = post.fields.title;
    const previewImg = post.fields.heroImage.fields.file.url
    const formattedDate = moment(post.fields.publishDate).format('MMM D Y');
    const author = post.fields.author.fields.name
    post.fields.tags.map(tag => {
        console.log(tag)
    })
    return (
        <div className="post__preview--container">
            <div className="post__preview--img-container">
                <img src={previewImg}/>
            </div>
            <div className="post__preview--subheader-container">
                <span className="type__subheader">
                    {formattedDate},
                </span>
                <span className="type__subheader" style={{paddingLeft: '8px'}}> {author} </span>
                {post.fields.tags.map((tag) => <span className="type__subheader post__tag" style={{ position: 'relative', paddingLeft: '16px' }}> {tag} </span>)}
            </div>
            <div className="post__preview--title">
                <PostLink title={title} />
            </div>
            <style jsx>{`
            .post__preview--container {
                flex-basis: 30%;
                -ms-flex: auto;
                position: relative;
                padding: 10px;
                box-sizing: border-box;
            }
            .post__preview--img-container {
                width: 100%;
                height: 300px;
                margin-bottom: 24px;
                -webkit-box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.4);
                -moz-box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.4);
                box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.4);
            }
            .post__preview--img-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .post__preview--subheader-container span:nth-child(2):after {
                content: " ";
                border-top: 2px solid #dddddd;
                width: 60px;
                position: absolute;
                margin: 9px 16px;
            }
            .post__tag {
                padding-left: 96px !important;
            }
            @media(max-width: 1333px) {
                .post__preview--container {
                    flex-basis: 33.33%;
                }
            }
            @media(max-width: 1073px) {
                .post__preview--container {
                    flex-basis: 33.33%;
                }
            }
            @media(max-width: 815px) {
                .post__preview--container {
                    flex-basis: 50%;
                }
            }
            @media(max-width: 555px) {
                .post__preview--container {
                    flex-basis: 100%;
                }
            }
            `}</style>
        </div>
    )
}

export default Posts