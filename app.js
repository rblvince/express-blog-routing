const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

const postsRouter = require('./routers/posts');
app.use('/posts', postsRouter);

const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
