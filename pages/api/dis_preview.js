export default function disable_preview( req, res){
    res.clearPreviewData();
    res.send("preview disabled");
}