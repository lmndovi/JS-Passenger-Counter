let countEl = document.getElementById("count-el");
// console.log(countEl);
let count = 0;
let saveEl = document.getElementById("save-el");
// console.log(saveEl);
let totalEl = document.getElementById("total-el");

function increment() {
    // console.log("clicked");
    count += 1;
    countEl.textContent = count; 
    console.log(count);
};

function save() {
    let saveCount = count + " - ";
    // totalEl.textContent += count;
    saveEl.textContent += saveCount;
    let totalNum = (totalEl.textContent += count);
    const dailyTotal = [];
    dailyTotal.push(count);
    console.log(dailyTotal)
    // function sum(N) {
    //     let total = 0
    //     for (let i = 1; i <= length(N); i++) {
    //         total += N[i];}
    //         return total;
    //     }
    
    // sum(totalNum);
    }
    // saveEl.textContent += saveCount;
    countEl.textContent = 0;
    count = 0;
    // console.log(saveEl);