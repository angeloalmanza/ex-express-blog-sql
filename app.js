const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const postRouter = require('./routers/posts');
const handleError = require('./middleware/handleError');

app.use(express.static('public'));

app.use(express.json());

app.use(cors ({
  origin : "http://localhost:5173"
}))

app.use("/posts", postRouter);

app.get('/', (req, res) => {
    res.json('Server del mio blog');
})

// app.get('/tags', (req, res) => {

//   const allTags = posts.map(post => post.tags).flat();
//   const uniqueTags = allTags.filter((value, index, self) => self.indexOf(value) === index);

//   res.json({ tags: uniqueTags });
// });

app.use(handleError);

app.listen(port, () => {
    console.log('Server is listening');
})