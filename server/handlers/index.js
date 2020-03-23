module.exports.notFound = (res, req, next) =>{
    const  err = new Error('Not Found');
    err.status = 400;

    next(err);

};

module.exports.errors = (err, req, res, next) => {
    res.status(err.status || 500).json({
        err: err.message || 'something went really wrong'
    })
};