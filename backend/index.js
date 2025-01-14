import express  from 'express'
import notes from './data/note.js';
import dotenv from 'dotenv'


const app = express();
dotenv.config();


app.get('/', (req, res)=>{
    res.send("Api is running....")
})

app.get('/api/note',(req, res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req, res)=>{
    const note = notes.find((n)=> n._id === req.params.id);
res.send(note)

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server runing on Port', PORT))