import {create_table, gdata} from './common.js';

// Get sorted by score / sorted by group data
async function getLeaderboard(isSorted = false) {
    try{
        const data = await gdata.leaderboard;
        return isSorted ? data.toSorted((a, b)=> Number(b[1])-Number(a[1])) : data;
    }catch (e){
        console.error(e)
    }
}

async function main(){
    try {
        const data = await getLeaderboard()
        create_table(data);
    } catch (e) {
        console.log(e)
    }
}

// Sort button event handler
const sortButton = document.getElementById("sort")
let isSorted = true;

sortButton.addEventListener('click', async()=>{
    try{
        let data = await getLeaderboard(isSorted);
        create_table(data);
        isSorted = !isSorted;
    }
    catch (e){
        console.error(e)
    }
})

// Run main() when page is loaded
await main()