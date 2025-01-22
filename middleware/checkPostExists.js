const checkPostExists = (req, res, next) => {
    next();
//    const postID = parseInt(req.params.id);

//    const post = posts.find(curPost => curPost.id === postID);

//    if(post){
//     next();
//    }else{
//     res.statusCode = 404;
//     res.json({
//         error : true,
//         message : "Post non trovato"
//     })
//    }
}

module.exports = checkPostExists;