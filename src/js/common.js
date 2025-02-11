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

        // Specify table header
        let isFirst = true

        data.forEach(row => {
            // Create header
            if (isFirst){
                const headerRow = document.createElement("tr");
                row.forEach(cell=>{
                    const th = document.createElement("th");
                    th.textContent = cell;
                    headerRow.appendChild(th)

                })
                table.appendChild(headerRow);
                isFirst = !isFirst;
            }
            // Each row
            else {
                const tr = document.createElement("tr");
                row.forEach(cell => {
                    // Each cell
                    const td = document.createElement("td");
                    td.textContent = cell;
                    tr.appendChild(td);
                })
                table.appendChild(tr)
            }
        });
        console.log("table created")

    } catch (error) {
        console.error("error", error);
    } finally {
        // remove "loading..." animation
        document.getElementById("loading").style.display = "none";
    }
}



