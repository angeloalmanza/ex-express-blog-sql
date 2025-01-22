const connection = require("../data/db");

// Index
const index = (req, res) => {
    //prelevo tutti i post
    const sql = `SELECT * FROM posts;`;
    connection.query(sql, (err, results) => {
        //Se la query restituisce un errore, mando errore 500
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server"
            })
            //altrimenti restituisco i dati
        } else {
            return res.status(200).json({
                status: "success",
                data: results
            })
        }
    })
}

// Show
const show = (req, res) => {

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