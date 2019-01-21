const Excerpt = (props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>{props.content}</p>
    </div>
)

export default Excerpt;
