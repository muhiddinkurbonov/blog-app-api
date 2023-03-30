
const errorHandler = (err, req, res, next) => {
  if(err.status === 401 && err.message === 'Unauthorized') {
    const status = 401;
    const message = 'Requires authentication';
    return res.status(status).json({message});
  }

  if(err.status === 401 && err.code === 'invalid_token' && 
  err.message === 'Permission denied') {
    const status = 403;
    const message = err.message;
    return res.status(status).json({message});
  }
  const status = err.status || err.code || 500;
  const message = err.message || 'internal error';

  return res.status(status).json({message});
}

module.exports = errorHandler;