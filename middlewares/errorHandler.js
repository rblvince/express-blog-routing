const errorHandler = (err, req, res, next) => {
  const status = err.status || err.statusCode;

  if (Number.isInteger(status) && status >= 400 && status <= 499) {
    return res.status(status).json({ error: 'Richiesta non valida' });
  }

  console.error(err);
  res.status(500).json({ error: 'Errore interno del server' });
};

module.exports = errorHandler;
