import {create_table, gdata} from './common.js';

let showCredit = false;

// Show Credit
document.getElementById("indexTitle").addEventListener('click', ()=>{
    if (!showCredit){
        document.getElementById("HomeScreen").style.display = "none";

        const h1 = document.createElement("h1");
        h1.textContent = "Credit";

        const contentDiv = document.querySelector('.content');
        const table = document.getElementById('t1');
        contentDiv.insertBefore(h1, table);

        create_table(gdata.credit);
        document.getElementById("t1").style.display = "block"
        showCredit = true;
    }
    else if (showCredit){
        const h1 = document.querySelector('.content h1');
        if (h1) {h1.remove();}

        document.getElementById("t1").style.display = "none";
        document.getElementById("HomeScreen").style.display = "block";
        showCredit = false;
    }
})

