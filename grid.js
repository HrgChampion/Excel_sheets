let rows =100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont"); 
let addressBar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class","address-col")
    addressCol.innerText = i + 1;
    addressColCont.appendChild(addressCol);
}

for(let i = 0; i < cols; i++){ 
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class","address-row")
    addressRow.innerText = String.fromCharCode(i + 65);
    addressRowCont.appendChild(addressRow);   
}

for(let i = 0; i < rows; i++){
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class","row-cont");
    for(let j = 0; j < cols; j++){
        let cell = document.createElement("div");
        cell.setAttribute("class","cell");
        cell.setAttribute("rid",i);
        cell.setAttribute("cid",j);
        cell.setAttribute("spellcheck","false");
        cell.setAttribute("contenteditable","true");
        rowCont.appendChild(cell);
        addEventListenerForAddressBarDisplay(cell,i,j);
    }
    cellsCont.appendChild(rowCont);
}

function addEventListenerForAddressBarDisplay(cell,i,j){
cell.addEventListener("click",(e)=>{
let rowId = i+1;
let colId = String.fromCharCode(j + 65);
addressBar.value = `${colId}${rowId}`
})
}

// Default click on first cell
let firstCell = document.querySelector(".cell");
firstCell.click();