const handleError = (err, req, res, next) => {
    console.log("gestione errori interni del server");
    res.statusCode = 500;
    res.json({
        error : true,
        message : "Errore del server"
    })
}

module.exports = handleError;