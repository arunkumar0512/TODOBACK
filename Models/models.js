import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  todo:{
    todo: String,
  isComplete: Boolean
  },
  alarmTime: {
    type: Date,
    required: false
}
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
