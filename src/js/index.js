import {create_table, gdata} from './common.js';

let showCredit = false;

document.getElementById("indexTitle").addEventListener('click', ()=>{
    if (!showCredit){
        document.getElementById("HomeScreen").style.display = "none";
        create_table(gdata.credit);
        document.getElementById("t1").style.display = "block"
        showCredit = true;
    }
    else if (showCredit){
        document.getElementById("t1").style.display = "none";
        document.getElementById("HomeScreen").style.display = "block";
        showCredit = false;
    }
})