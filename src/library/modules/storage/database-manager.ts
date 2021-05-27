import * as db from './database';
import {encrypt, decrypt} from '../encryption';

export const initialize = () => db.init();

export const getItem = async (key: string) => {
  console.log({getItem: key});

  try {
    const data: any = await db.fetch();
    if (data.rows.length === 0) {
      return;
    }
    let row = data.rows.item(data.rows.length - 1);
    const encryptedDatabase = row.encData;
    const database = decrypt(encryptedDatabase, key);
    console.log({database});
    return database;
  } catch (err) {
    console.log(err);
  }
};

export const setItem = async (key: string, database: any) => {
  console.log({database, key});

  const encryptedDatabase = encrypt(database, key);
  try {
    console.log({encryptedDatabase});
    await db.insert(encryptedDatabase);
    const insert = await getItem(key);
    console.log({insert});
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};
