const connection = require("../data/db");
const { connect } = require("../routers/posts");

// Index
const index = (req, res) => {
    //prelevo tutti i post
    const sql = `SELECT * FROM posts;`;
    connection.query(sql, (err, posts) => {
        //Se la query restituisce un errore, mando errore 500
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server"
            })
            //altrimenti restituisco i dati
        } else {
            return res.status(200).json({
                status: "success",
                data: posts
            })
        }
    })
}

// Show
const show = (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM posts WHERE id = ?;`;

    const tagsSql = `
    SELECT tags.*
    FROM tags
    JOIN post_tag
    ON post_tag.tag_id = tags.id
    JOIN posts
    ON post_tag.post_id = posts.id
    WHERE posts.id = ?
    `
    connection.query(sql, [id], (err, posts) => {
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server"
            })
        } 
        
        if (posts.length === 0) {
            return res.status(404).json({
                message: "Post non trovato"
            })
        } else {
            connection.query(tagsSql, [id], (err, tags) => {
                if (err) {
                    return res.status(500).json({
                        message: "Errore interno del server"
                    })
                }

                const postsDetails = {
                    ...posts[0],
                    tags: tags
                }
                
                return res.status(200).json({
                    status: "success",
                    data: postsDetails
                })
            })
        }
    })
}

// // Create
// const create =  (req, res) => {

// }

// // Update
// const update = (req, res) => {

// }

// // Modify
// const modify = (req, res) => {

// }

// Destroy
const destroy = (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM posts WHERE id = ?;`;
    connection.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server"
            })
        } else {
            return res.sendStatus(204);
        }
    })
}

module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
}