import axios from "axios";
import { comments } from "../../../data/comments";
export default async function CommentDesc (req, res) {
    const {commentId} = req.query;
    if(req.method ==='GET'){       
        console.log(commentId);
        const data = comments.find(comment => comment.id === parseInt(commentId));
        console.log(data)
        res.status(201).json(data);
    }
    else if(req.method === 'DELETE'){
        const response = await axios.delete(`http://localhost:4000/comments/${commentId}`);
        res.status(200).json({msg:'Deleted'});
    }
    
}