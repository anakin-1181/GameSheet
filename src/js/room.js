import SheetsAPI from './sheets.js';
import {waitForGapi, create_table, getData, range} from './common.js';

const sheets = new SheetsAPI;




document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await getData(range.room);
        await waitForGapi();
        await create_table(data);

    } catch (error) {
        console.log(error);
    }
});