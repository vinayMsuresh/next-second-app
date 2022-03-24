import axios from 'axios';
import React,{useState} from 'react'

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async() => {
        const response = await axios.get('http://localhost:4000/comments');
        console.log(response.data);
       setComments(response.data);
    }
    const submitComment = async() => {
        const response = await fetch('/api/comments',
        {
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        await response.json();
        fetchComments();
    }

    const deleteComments = async commentId=> {
        const response = await axios.delete(`/api/comments/${commentId}`);
        console.log(response.data);
        fetchComments();
    }  
    return (
    <div>
        <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />

        <button onClick={submitComment} >Submit Comment</button>
        <button onClick={fetchComments}>Load Comments</button>
        {
            comments.map(comment=>
                <div key={comment.id}>
                    <h2>{comment.id} {comment.text}</h2>
                    <button onClick={() => deleteComments(comment.id)}>Delete</button>
                </div>)
        }
    </div>
  )
}
