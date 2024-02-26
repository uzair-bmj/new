const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())
app.use(express.json())
const users = [];
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
app.get("/", (req, res) => {
    res.send("How are you")
})
// app.post("/signup", (req, res) => {

//     const found = users.find((items) => { return items.userName == req.body.userName })
//     if (!found) {
//         users.push(req.body)
//         res.send(users)
//     }
//     else {
//         res.send(false)
//     }

// })
// app.post("/signin", (req, res) => {

//     const found = users.find((items) => { return items.userName == req.body.userName && items.Password == req.body.Password })
//     if (found) {
//         res.send(found)
//     }
//     else {
//         res.send(false)
//     }

// })

// app.get("/profile", (req, res) => {
//     res.json(users)
// })
// app.post("/posts", (req, res) => {
//     const found = users.find((items) => items.userName == req.body.userName);
//     if (found) {
//         if (!found.posts) {
//             found.posts = []; // Initialize posts array if it doesn't exist
//         }
//         found.posts.unshift(req.body.post);
//         res.send(req.body.post);
//     } else {
//         res.status(404).send("User not found"); // Return appropriate error response
//     }
// });
// app.delete("/posts", (req, res) => {
//     const found = users.find((items) => items.userName == req.body.userName);
//     if (found) {
//         // res.status(203).json(req.body);
//         found.posts.splice(req.body.index, 1)
//     }
//     else {
//         res.status(404).send("Post not found")
//     }

// });
// app.put("/posts", (req, res) => {
//     const { userName, index, edit } = req.body;
//     const found = users.find((user) => user.userName === userName);

//     if (found && found.posts && index >= 0 && index < found.posts.length) {
//         found.posts[index] = edit; // Update the post at the specified index
//         res.status(200).json(found.posts); // Return updated posts array
//     } else {
//         res.status(404).send("Post not found"); // Return appropriate error response
//     }
// });
