import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello world.' }));

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
