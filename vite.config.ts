import { defineConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import 'dotenv/config'
import mongoose from 'mongoose'
import express, {json, Request, Response} from 'express'

const app = express();
app.use(json())

const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODB_PASSWORD}@animals.thgcw.mongodb.net/animals-db?retryWrites=true&w=majority&appName=animals`;
async function connectToDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  catch(e){
    console.error(e)
  }
}
await connectToDB();

const animalSchema = new mongoose.Schema({
  class: String,
  biome: String,
  name: String,
  animalia: String,
  legs: Number,
  isPredator: Boolean,
  img: String,
  url: String,
  like: Number,
  dislike: Number
})
if(mongoose.modelNames().includes('animals')){
  mongoose.deleteModel('animals')
}
const AnimalModel = mongoose.model('animals', animalSchema);

function getAnimals() {
  let animals = AnimalModel.find({});//function that returns the actual animals from the actual database
  return animals;
}


app.get('/api/animals', async (req: Request, res: Response) => {
  let animals = await getAnimals();
  console.log(animals)
  res.status(200).send(animals);
})

app.post('/api/new-animal', async (req: Request, res: Response) => {
  try {
    let newAnimal = req.body;
    const newAnimalDocument = new AnimalModel(newAnimal);
    newAnimalDocument.save();

    res.status(201).send({message: "Animal is created"})
  }catch(e){
    res.status(500).send({message: "Internal server error"})
    console.error(e);
  }
})

function expressPlugin() {
  return {
    name: "express-plugin",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), expressPlugin()],
  server: {
    proxy: {
      "/api": "http://localhost:5173/", // Ensure Vite dev server routes requests properly
    },
  },
})