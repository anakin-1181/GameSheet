import SheetsAPI from './sheets.js';

const sheets = new SheetsAPI();

export const range = {
    time: "Time!A1:B9",
    room: "Room!A1:B12",
    leaderboard: "Ranking!A1:B11"
}

export async function getData(range){
    try{
        return await sheets.readSheet(range);
    }
    catch (e){
        console.error(e);
    }
}

export async function fData(range) {
    try {
        let data = await sheets.readSheet(range);
        data.forEach((arr)=>{
            if (arr[1] === "Score"){
            }
            else {
                arr[1] = Math.ceil(arr[1])
            }
        })
        return data
    }
    catch (e){
        console.log(e)
    }
}

export async function create_table(data){
    try{
        await sheets.initialize();

        const table = document.getElementById("t1")
        if (!table){
            throw new Error("Table element not found");
        }
        data.forEach(row => {
            // Each row
            const tr = document.createElement("tr");
            row.forEach(cell => {
                // Each cell
                const td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            })
            table.appendChild(tr)
        });

    } catch (error) {
        console.error("error", error);
    }

}

export async function waitForGapi(retries = 15) {
    while (typeof gapi === "undefined" && retries > 0) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
        retries--; // Decrease retry count
    }

    if (typeof gapi === "undefined") {
        alert("gapi is not loaded");
    } else {
        alert("gapi loaded successfully");
    }
}


