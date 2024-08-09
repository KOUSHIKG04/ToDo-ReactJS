import mongoose from "mongoose";
 

const url = "mongodb+srv://koushikg04:million%40733@cluster0.pnqmmfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);

const todoSchema = mongoose.Schema({
  title: String,
  content: String,
  completed: Boolean,
  // completed :{
  //   type:Boolean,
  //   default :false
  // }
});

const todo = mongoose.model("todos", todoSchema);

export default todo;
