import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  char_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  birhtday: {
    type: String,
    required: false,
  },
  occupation: {
    type: Array,
    required: false,
  },
  imgURL: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  nickname: {
    type: String,
    required: false,
  },
  
  portrayed: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
});
export const Character = mongoose.model('Character', characterSchema);
