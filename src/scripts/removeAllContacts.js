import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const deleteContacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(deleteContacts));
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
