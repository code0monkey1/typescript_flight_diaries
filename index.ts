import express from 'express';
import diariesRouter from './src/routes/diaries';
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get('/health',(_req,res) => {

  res.send('ok');
});

app.listen(PORT, ()=>{
    console.log("Listening on port " +PORT);
});

app.use('/api/diaries',diariesRouter);
