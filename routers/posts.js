const express = require('express');
const connection = require('../db/connection');

const router = express.Router();

const ID_REGEX = /^[1-9]\d*$/;

// Index
router.get('/', async (req, res) => {
  const [posts] = await connection.query('SELECT id, title, content, image FROM posts ORDER BY id');
  res.json(posts);
});

// Show
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!ID_REGEX.test(id)) {
    return res.status(400).json({ error: 'Id non valido' });
  }

  const [rows] = await connection.query(
    `SELECT posts.id, posts.title, posts.content, posts.image, tags.id AS tag_id, tags.label AS tag_label
    FROM posts
    LEFT JOIN post_tag ON posts.id = post_tag.post_id
    LEFT JOIN tags ON post_tag.tag_id = tags.id
    WHERE posts.id = ?`,
    [id]
  );

  if (rows.length === 0) {
    return res.status(404).json({ error: 'Post non trovato' });
  }

  const post = {
    id: rows[0].id,
    title: rows[0].title,
    content: rows[0].content,
    image: rows[0].image,
    tags: rows.filter((row) => row.tag_id !== null).map((row) => ({ id: row.tag_id, label: row.tag_label }))
  };

  res.json(post);
});

// Create
router.post('/', (req, res) => {
  res.type('text/plain');
  res.send('Creazione di un nuovo post');
});

// Update
router.put('/:id', (req, res) => {
  const { id } = req.params;

  if (!ID_REGEX.test(id)) {
    return res.status(400).json({ error: 'Id non valido' });
  }

  res.type('text/plain');
  res.send(`Modifica del post ${id}`);
});

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!ID_REGEX.test(id)) {
    return res.status(400).json({ error: 'Id non valido' });
  }

  const [result] = await connection.query('DELETE FROM posts WHERE id = ?', [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ error: 'Post non trovato' });
  }

  res.status(204).end();
});

module.exports = router;
