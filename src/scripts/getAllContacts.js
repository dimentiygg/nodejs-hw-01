import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileData);

    return contacts;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
