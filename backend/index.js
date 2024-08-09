import express from "express";
import { createTodo, updateToDo } from "./types.js"
import  todo from "./db.js";
import cors from "cors"


const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin : "http://localhost:5173"
}));


app.get("/todos", async (req, res) => {
   const todos = await todo.find({})
   res.json({todos})
});


app.post("/todo",async (req, res) => {
   const createPayload =  req.body; 
   const parsedPayload =  createTodo.safeParse(createPayload); 
   if (!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
   }
   await todo.create({
    title : createPayload.title,
    content : createPayload.content,
    completed : false,
   })
   res.json({
    msg : "ToDo created!!"
   })
});


app.put("/completed", async (req, res) => {
    const updatePayload =  req.body; 
    const parsedPayload =  updateToDo.safeParse(updatePayload); 
    if (!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
   }
   await todo.updateOne({
    _id : req.body.id,
   },{
    completed : true,
   })
   res.json({
    msg : "ToDo marked as completed!!"
   })
});

app.listen(3000, () => {
    console.log('Server running successfully');
 });
 