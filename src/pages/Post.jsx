
const Post = ({post}) => {
    return (
        <>
        <p>{post.id} - {post.title} - {post.description}</p>
        </>
    )
}

export default Post;