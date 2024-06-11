import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileData);

    return `Кількість контактів - ${contacts.length}`;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
