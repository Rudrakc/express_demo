import express from 'express'

const app = express();
app.use(express.json());
app.use(middleware);

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

// GET FROM ID
app.get("/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course not found");
    res.json(course);
  });

// GET REQUEST
app.get("/courses", (req, res) => {
  res.json(courses);
});

// POST REQUEST
app.post("/courses", (req, res) => {
    const data = {
        id: courses.length+1,
        name: req.body.name,
    };
    console.log('Received data:', data);
    courses.push(data);
    console.log(courses);
    res.send('Data received');
});

// PUT REQUEST
app.put("/courses/:id", (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("Course id not found!!");
    course.name = req.body.name;
    res.json(course);
});

// DELETE REQUEST
app.delete("/courses/:id", (req, res) => {
    let courseId = courses.findIndex(c => c.id === parseInt(req.params.id));
    if(courseId === -1) return res.status(404).send("Course id not found!!");
    const deletedCourse = courses.splice(courseId, 1);
    res.json(deletedCourse);
})

function middleware(req, res, next) {
    console.log(`[${new Date()}] ${req.method} request from ${req.ip} to ${req.hostname}`);
    next();
}

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
