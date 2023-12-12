const errorDictionary = {
    'PRODUCT_NOT_FOUND': 'El producto no se encontró.',
    'INVALID_REQUEST': 'La solicitud no es válida.',
    // ...agrega más errores según tus necesidades
  };
  
  function errorHandler(err, req, res, next) {
    const errorCode = err.code || 'UNKNOWN_ERROR';
    const errorMessage = errorDictionary[errorCode] || 'Error desconocido';
  
    res.status(err.status || 500).json({
      error: true,
      code: errorCode,
      message: errorMessage,
    });
  }
  
  module.exports = {
    errorHandler,
  };
  