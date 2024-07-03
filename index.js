import express from 'express'

const app = express();
app.use(express.json());

let courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
];

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/courses", (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    courses.push(data);
    console.log(courses);
    res.send('Data received');
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
