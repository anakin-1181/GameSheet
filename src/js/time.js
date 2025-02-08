import {create_table, gdata} from './common.js';

async function main() {
    try {
        const data = gdata.time;
        await create_table(data);
    } catch (e) {
        console.log(e);
    }
}

// Run main() when page is loaded
await main()