import {create_table, gdata} from './common.js';

// html elements
const htmlElement = {
    homeLogo: document.getElementById("HomeScreen"),
    creditHeader: document.getElementById("credit"),
    contentDiv: document.querySelector(".content"),
    table: document.getElementById("t1"),
    indexTitle: document.getElementById("indexTitle")
}

function showCreditPage() {
    // Hide homepage logo
    htmlElement.homeLogo.style.display = "none";
    // Create and place credit header
    htmlElement.creditHeader.style.display = "block";
    htmlElement.creditHeader.textContent = "Credit";
    // Create credit table
    create_table(gdata.credit);
    htmlElement.table.style.display = "block";
}

function hideCreditPage() {
    // hide credit header and table
    htmlElement.creditHeader.style.display = "none";
    htmlElement.table.style.display = "none";
    // Show homepage logo
    htmlElement.homeLogo.style.display = "block";
}

function toggleCreditPage(){
    // Check if the credit table is shown
    const isShowingCredit = (htmlElement.homeLogo.style.display === "none");
    // Handle table showing logic
    if (isShowingCredit){
        hideCreditPage();
    } else {
        showCreditPage();
    }
}

// Button click event listener
htmlElement.indexTitle.addEventListener("click", toggleCreditPage);