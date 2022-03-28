export default function Preview(req, res){
    res.setPreviewData({user: "Vinay"});
    res.redirect(req.query.redirect);
}