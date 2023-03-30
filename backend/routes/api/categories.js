const express = require('express');
const router = express.Router();
const categories = require('../../Categories');
const words = require('../../Words');

const delay = timeoutInMs =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, timeoutInMs),
  );

router.get('/', async (req, res) => {
  await delay(2000);
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  await delay(500);
  const id = req.params.id;
  const puzzle = words.find(word => word.categoryId === id)?.puzzle;
  res.json(puzzle ?? []);
});

module.exports = router;
