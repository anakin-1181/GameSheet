import {sheets} from './sheets.js';

// Google sheet range for data
const range = {
    time: "Time!A1:B9",
    room: "Room!A1:C12",
    leaderboard: "Ranking!A1:B11"
};

// Export data to use in different sheets
export const gdata = {
    time: await getData(range.time),
    room: await getData(range.room),
    leaderboard: await fData((range.leaderboard))
};

// Get data by using sheets from sheets.js
async function getData(range) {
    try {
        return await sheets.readSheet(range);
    } catch (e) {
        console.error(e);
    }
}

// Format data by rounding up floats to integer
async function fData(range) {
    try {
        let data = await getData(range);
        data.forEach((arr) => {
            if (isNaN(Number(arr[1]))) {
            }
            else {
                arr[1] = Math.ceil(Number(arr[1]))
            }
        })
        return data
    } catch (e) {
        console.log(e)
    }
}

// Create table of any size with different data
// loading is used to produce "loading..." animation while creating table
export function create_table(data) {
    try {
        // Get html element data
        let table = document.getElementById("t1");
        let loading = document.getElementById("loading");

        if (!table) {
            throw new Error("Table element not found");
        }

        // Show "loading..." animation
        loading.style.display = "block";

        // Clear previous table content
        table.innerHTML = "";

        data.forEach((row, rowIndex) => {
            // Each row
                const tr = document.createElement("tr");
                row.forEach((cell, cellIndex) => {
                    // Each cell
                    const element = document.createElement(rowIndex===0 ? "th" : "td");
                    element.textContent = cell;
                    
                    if (cellIndex===0){
                        element.classList.add("first-column");
                    }

                    tr.appendChild(element);
                })
                table.appendChild(tr)
            
        });
        console.log("table created")

    } catch (error) {
        console.error("error", error);
    } finally {
        // remove "loading..." animation
        document.getElementById("loading").style.display = "none";
    }
}



