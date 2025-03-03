import { defineConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import 'dotenv/config'
import mongoose from 'mongoose'
import express, {Request, Response} from 'express'

const app = express();

const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODB_PASSWORD}@animals.thgcw.mongodb.net/animals-db?retryWrites=true&w=majority&appName=animals`;
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

app.get('/api/animals', async (req: Request, res: Response) => {
  res.send("Minden jó");
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