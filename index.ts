import cors from 'cors';
import express from 'express';
import diariesRouter from './src/routes/diaries';
// file deepcode ignore DisablePoweredBy: <please specify a reason of ignoring this>
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get('/health',(_req,res) => {

  res.send('ok');
});

app.listen(PORT, ()=>{
    console.log("Listening on port " +PORT);
});

app.use('/api/diaries',diariesRouter);
