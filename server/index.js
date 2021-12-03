const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get('/api/fortune', (req, res) => {
  const fortunes = ['You will make a new friend soon',
'A good time to finish up old tasks', 'A person is never to old to learn', 'A pleasant suprise is waiting for you', 'all will go well with your new project'
]

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

res.status(200).send(randomFortune)
})

const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal
} = require('controller')

app.get('/api/goal', getGoals)
app.post('/api/goal', addGoal)
app.put('/api/goal/:id', updateGoal)
app.delete('/api/goal/:id', deleteGoal)

app.listen(4000, () => console.log("Server running on 4000"));
