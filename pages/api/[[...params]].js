export default function Handler ( req, res) {
    const {params} = req.query;
    res.status(300).json(params);
}