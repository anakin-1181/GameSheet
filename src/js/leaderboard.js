import {create_table, fData, gdata} from './common.js';

async function sortedData(){
    try {
        const data = await fData();
        return data.sort((a, b) => Number(b[1]) - Number(a[1]))
    } catch (error) {
        console.error('Error:', error);
    }
}
console.log("before DOM listener: ",gdata.leaderboard)

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         console.log("hi")
//         let data = gdata.leaderboard;
//         console.log(data)
//         await create_table(data);
//
//     } catch (error) {
//
//     }
//     console.log("leaderboard sth")
// });

async function main(){
    try {
        console.log("hi")
        let data = gdata.leaderboard;
        console.log("final lederboard",data)
        await create_table(data);

    } catch (error) {

    }
    console.log("leaderboard sth")
}

await main()