import PostLink from './PostLink'


const Posts = ({post}) => {
    const title = post.fields.title;
    const previewImg = post.fields.heroImage.fields.file.url
    console.log(post)
    return (
        <div className="post__preview--container">
            <div className="post__preview--img-container">
                <img src={previewImg}/>
            </div>
            <div className="post__preview--date-container">
                <span>
                </span>
            </div>
            <div className="post__preview--title">
                <PostLink title={title} />
            </div>
            <style jsx>{`
            .post__preview--img-container {
                width: 400px;
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
            `}</style>
        </div>
    )
}

export default Posts