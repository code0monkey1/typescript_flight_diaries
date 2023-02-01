import diaryData from '../../data/diaries';

import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): Array<DiaryEntry> => {
  return diaryData;
};

const getNonSensitiveEntries = (): Array<NonSensitiveDiaryEntry> => diaryData
        .map(({id , date, weather,visibility} )=> ({
                id,
                date ,
                weather,
                visibility
        }));

const findById = (id: number): DiaryEntry | undefined=> {
  const entry = diaryData.find(d => d.id === id);
  return entry;
};


const addDiary = (entry:NewDiaryEntry):Array<DiaryEntry> => {

   const newEntry={
    ...entry,
    id: Math.max(...diaryData.map(d => d.id ))+1
  };

  diaryData.push(newEntry);

  return diaryData;

};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};