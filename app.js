const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const postRouter = require('./routers/posts');
const handleError = require('./middleware/handleError');
const posts = require("./data/posts");

app.use(express.static('public'));

app.use(express.json());

app.use(cors ({
  origin : "http://localhost:5173"
}))

app.use("/posts", postRouter);

app.get('/', (req, res) => {
    res.json('Server del mio blog');
})

app.get('/tags', (req, res) => {

  const allTags = posts.map(post => post.tags).flat();
  const uniqueTags = allTags.filter((value, index, self) => self.indexOf(value) === index);

  res.json({ tags: uniqueTags });
});

app.use(handleError);

app.listen(port, () => {
    console.log('Server is listening');
})


// const menu = [
//     {
//       id: 1,
//       name: "Margherita",
//       image: "imgs/pizze/margherita.webp",
//       ingredients: ["pomodoro", "mozzarella"],
//     },
//     {
//       id: 2,
//       name: "Marinara",
//       image: "imgs/pizze/marinara.jpeg",
//       ingredients: ["pomodoro", "aglio", "origano"],
//     },
//     {
//       id: 3,
//       name: "Diavola",
//       image: "imgs/pizze/diavola.jpeg",
//       ingredients: ["pomodoro", "mozzarella", "salame piccante"],
//     },
//     {
//       id: 4,
//       name: "Bufalina",
//       image: "imgs/pizze/bufalina.jpeg",
//       ingredients: ["pomodoro", "mozzarella di bufala"],
//     },
//     {
//       id: 5,
//       name: "4 formaggi",
//       image: "imgs/pizze/4_formaggi.jpeg",
//       ingredients: [
//         "pomodoro",
//         "mozzarella",
//         "gorgonzola",
//         "parmigiano",
//         "ricotta",
//       ],
//     },
//   ];

// const uniqueIngredients = [];

// menu.forEach(pizza => {
//   pizza.ingredients.forEach(ingredient => {
//     if (!uniqueIngredients.includes(ingredient)) {
//       uniqueIngredients.push(ingredient);
//     }
//   });
// });

// console.log(uniqueIngredients);