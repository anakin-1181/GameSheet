import {create_table, gdata} from './common.js';

async function main() {
    try {
        const data = await gdata.room;
        create_table(data);
    } catch (error) {
        console.log(error);
    }
}

// Run main() when page is loaded
await main()