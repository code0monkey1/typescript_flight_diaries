
import express from 'express';
import diaryService from '../services/diaryService';
import { NewDiaryEntry } from '../types';
import toNewDiaryEntry from '../utils/index';

const router = express.Router();

router.get('/', (_req, res) => {

  res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  
    const entry =diaryService.findById(Number(req.params.id));

    if(entry) {
         res.send(entry); 
    }
    else{
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
  
  try{
    
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const entry :NewDiaryEntry = toNewDiaryEntry(req.body);
  
  const entries = diaryService.addDiary(entry);

  res.send(entries);
  
}catch(error:unknown){
  
   let errorMessage="Error: ";
    
   if (error instanceof Error)
       errorMessage+=error.message;
       
    res.status(400).json(errorMessage);
}
});




export default router;