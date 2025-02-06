import {create_table, gdata} from './common.js';

function sortedData(){
    try {
        const data = gdata.leaderboard;
        // let sorted_data = data.sort((a, b) => Number(b[1]) - Number(a[1]))
        return data.toSorted((a, b) => Number(b[1]) - Number(a[1]))
    } catch (error) {
        console.error('Error:', error);
    }
}
console.log("before DOM listener: ",gdata.leaderboard)

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

let sortButton = document.getElementById("sort")
let isSorted = false;

sortButton.addEventListener('click', async()=>{
    try{
        if (isSorted){
            let data = gdata.leaderboard;
            console.log(data)
            await create_table(data);
            sortButton.textContent = "Sort By Score";
            isSorted = !isSorted;
            console.log("current: ", isSorted)
        }
        else if (!isSorted){
            let sorted_data = sortedData();
            console.log(sorted_data)
            await create_table(sorted_data);
            sortButton.textContent = "Sort By Group";
            isSorted = !isSorted;
            console.log("current: ", isSorted)
        }
    }
    catch (e){
        console.error(e)
    }
})



await main()