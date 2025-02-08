import SheetsAPI from './sheets.js';

const sheets = new SheetsAPI();

async function getSheet() {
    try {
        await waitForGapi();
        await sheets.initialize();
        return sheets
    }
    catch (e){
        console.error("DOM", e)
    }
}

export const range = {
    time: "Time!A1:B9",
    room: "Room!A1:B12",
    leaderboard: "Ranking!A1:B11"
};

export const gdata = {
    time: await getData(range.time),
    room: await getData(range.room),
    leaderboard: await fData((range.leaderboard))
};

export async function getData(range) {
    try {
        return sheets.readSheet(range);
    } catch (e) {
        console.error(e);
    }
    }


    export async function fData(range) {
        try {
            let data = await getData(range);
            console.log("formatted data: ", data)
            data.forEach((arr) => {
                if (isNaN(Number(arr[1]))) {
                } else {
                    arr[1] = Math.ceil(arr[1])
                }
            })
            return data
        } catch (e) {
            console.log(e)
        }
    }

    export function create_table(data) {
        try {
            let table = document.getElementById("t1");
            let loading = document.getElementById("loading");

            if (!table) {
                throw new Error("Table element not found");
            }

            loading.style.display = "block";
            table.innerHTML = "";
            let isFirst = true

            data.forEach(row => {
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
        }
        finally {
    // Hide loading once the table is creat

        document.getElementById("loading").style.display = "none";
}
    }

    export async function waitForGapi(retries = 15) {
        while (typeof gapi === "undefined" && retries > 0) {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
            console.log(`${retries} tries left`)
            alert(`${retries} tries left`)
            retries--; // Decrease retry count
        }

        if (typeof gapi === "undefined") {
            alert("gapi is not loaded");
        } else {
            alert("gapi loaded successfully");
        }
    }



