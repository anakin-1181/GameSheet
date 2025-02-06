import SheetsAPI from './sheets.js';
import {waitForGapi, create_table, fData,range} from './common.js';

const sheets = new SheetsAPI;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await fData(range.time);
        await waitForGapi();
        await create_table(data);

    } catch (error) {
        console.log(error);
    }
});