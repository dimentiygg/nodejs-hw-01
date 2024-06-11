import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const existingContacts = JSON.parse(fileContent);

    for (let i = 0; i < number; i++) {
      existingContacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(existingContacts));
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
