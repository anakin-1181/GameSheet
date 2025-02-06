import SheetsAPI from './sheets.js';
import {waitForGapi, create_table, getData, gdata} from './common.js';

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const data = gdata.room;
//         await waitForGapi();
//         await create_table(data);
//
//     } catch (error) {
//         console.log(error);
//     }
// });

async function main() {
    try {
        const data = gdata.room;
        await create_table(data);

    } catch (error) {
        console.log(error);
    }
}

await main()