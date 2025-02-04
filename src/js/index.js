import SheetsAPI from './sheets.js';

const sheets = new SheetsAPI();

async function sortedData(){
    try {
        const data = await sheets.readSheet();
        return data.sort((a, b) => Number(b[1]) - Number(a[1]))
    } catch (error) {
        console.error('Error:', error);
    }
}

async function create_table(){
    try{
        await sheets.initialize();
        const data = await sheets.readSheet();

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

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await create_table();
    }
    catch (error){
        console.log(error)
    }

});

