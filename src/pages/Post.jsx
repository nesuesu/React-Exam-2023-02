
const Post = ({post}) => {
    return (
        <>
        <div className="post">
            <h3 style={{textAlign:'center',color:'rgb(7, 7, 110)'}}>{post.id}) {post.title}</h3>
            <p>{post.description}</p>
        </div>
        </>
    )
}

export default Post;