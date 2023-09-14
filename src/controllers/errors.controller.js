const  ApiError = require('../api-error');
function methodNotALLowed( req , res , next ) {
    if ( req.method){
        const httpMethod = Object.keys(req.route.methods)
        .filter ((method) => method !== '_all')
        .map((method) =>method.toUpperCase());

        return next(
            new ApiError (405,'Method Not Allowed',{
           Allow: httpMethod.join (','),

            })
        );
    }

    return next();
}
function resourceNotFound( req , res , next ){
    return next(new ApiError (404,'Resource Not Found'));
}

function handlerError( error,req , res , next ){
    if (res.headersSent){
        return next(error);
    }

    return res
    .status(error.statusCode || 500)
    .set(error.headeers || {})
    .json ({
        message : error.message || 'Internal Server Error',
    });

}

module.exports = {
    methodNotALLowed,
    resourceNotFound,
    handlerError,
};