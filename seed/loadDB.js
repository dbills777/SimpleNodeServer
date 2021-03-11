import { Character } from '../models/characters.js';
import axios from 'axios';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// seed mongo with characters from breaking bad api
const seedMongo = async () => {
  await mongoose.connect(`${process.env.DGM4790_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const options = {
    method: 'GET',
    url: 'https://www.breakingbadapi.com/api/characters',
  };

  try {
    const response = await axios.request(options);
    console.log('line 20 response log', response.data[0]);
    // await postAddCharacter(response.data[0]);
    await addAllCharacters(response.data);
    await mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

const postAddCharacter = async (req, res) => {
  console.log('This is the request', req);
  const character = new Character({
    char_id: req.char_id,
    name: req.name,
    birhtday: req.birhtday,
    occupation: req.occupation,
    imgURL: req.img,
    status: req.status,
    nickname: req.nickname,
    portrayed: req.portrayed,
    category: req.category,
  });
  console.log('line 34console.', character);
  await character.save();
};

const addAllCharacters = async (characterList) => {
  for (let character of characterList) {
    // console.log(character)
    await postAddCharacter(character);
  }
};
seedMongo();
