import SheetsAPI from './sheets.js';

const sheets = new SheetsAPI();

async function sortedData(){
    try {
        const data = await fData();
        return data.sort((a, b) => Number(b[1]) - Number(a[1]))
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fData() {
    try {
        let data = await sheets.readSheet();
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

async function create_table(){
    try{
        await sheets.initialize();
        const data = await fData();

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

async function waitForGapi(retries = 5) {
    while (typeof gapi === "undefined" && retries > 0) {
        alert(`${retries} tries left`)
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
        retries--; // Decrease retry count
    }

    if (typeof gapi === "undefined") {
        alert("gapi is not loaded")
    } else {
        console.log("Google API loaded successfully.");
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await waitForGapi();
        await create_table();

    } catch (error) {
        console.log(error);
    }
});
