import axios from "axios";

export default async function getComments(req, res) {
    if(req.method === 'GET'){
        const response = await axios.get('http://localhost:4000/comments');    
        res.status(200).json(response);
    }
    else if(req.method === 'POST'){
        let {comment} = req.body;
        let newComment = {text: comment};
        axios.post('http://localhost:4000/comments',newComment);
        res.status(201).json({newComment});
    }
}