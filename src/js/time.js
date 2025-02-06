import {waitForGapi, create_table, fData, gdata} from './common.js';


// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const data = gdata.time;
//         await waitForGapi();
//         await create_table(data);
//
//     } catch (error) {
//         console.log(error);
//     }
// });


//     }
// });

async function main() {
    try {
        const data = gdata.time;
        await create_table(data);

    } catch (error) {
        console.log(error);
    }
}

await main()