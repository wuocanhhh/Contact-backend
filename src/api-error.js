class ApiError extends Error {
    constructor (statusCode, message, headers ={}) {
        super();
        this.statusCode = statusCode;
        this.headers = headers;
        this.message = message;
}
}

module.exports = ApiError;