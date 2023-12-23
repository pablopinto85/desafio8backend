const { expect } = require('chai');
const errorDictionary = {
    'PRODUCT_NOT_FOUND': 'El producto no se encontró.',
    'INVALID_REQUEST': 'La solicitud no es válida.',
    // ...agrega más errores según tus necesidades
  };
  
  function errorHandlerMiddleware(err, req, res, next) {
    const errorCode = err.code || 'UNKNOWN_ERROR';
    const errorMessage = errorDictionary[errorCode] || 'Error desconocido';
  
    // Set appropriate status code based on error type
    const statusCode = errorCode === 'PRODUCT_NOT_FOUND' ? 404 : 500; // Adjust as needed
  
    res.status(statusCode).json({
      error: true,
      code: errorCode,
      message: errorMessage,
    });
  }
  
  module.exports = {
    errorHandlerMiddleware,
  };
  