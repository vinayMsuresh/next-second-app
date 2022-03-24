import { comments } from "../../data/comments";
import { useRouter } from "next/router";
function CommentDetails ({comment}) {
    const router = useRouter();
    if(router.isFallback){
        return <h2>Loading</h2>
    }
    return(
        <>
        <h2>{comment.id} {comment.text}</h2>
        </>
    )
}

export default CommentDetails;

export function getStaticPaths(){
    return{
        paths:[
            {
                params:{commentId: '1'}
            }
        ],
        fallback:true
    }
}

export function getStaticProps(context) {
    let {params} = context;
    let {commentId} = params;
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    console.log(comment);
    return{
        props:{
            comment,
        }
    }
}