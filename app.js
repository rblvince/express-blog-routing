const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

const postsRouter = require('./routers/posts');
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
