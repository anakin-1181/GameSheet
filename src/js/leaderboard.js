import SheetsAPI from './sheets.js';
import {waitForGapi, create_table, fData, range} from './common.js';

const sheets = new SheetsAPI;


async function sortedData(){
    try {
        const data = await fData();
        return data.sort((a, b) => Number(b[1]) - Number(a[1]))
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await fData(range.leaderboard);
        await waitForGapi();
        await create_table(data);

    } catch (error) {
        console.log(error);
    }
});