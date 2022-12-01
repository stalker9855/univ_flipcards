const userName = document.getElementById('username');
var userName_ = prompt("Enter you name: ", "User");
if(userName_ == null || userName_ == ""){
    userName.innerHTML = "User";
}
else{
    userName.innerHTML = userName_;
}
const btn = document.getElementById('btn');
const score = document.getElementById('count');
const roll = () => Math.floor(4 * Math.random()); 
class Slot{
    constructor(name, point, source){
        this.name = name;
        this.point = point;
        this.source = source;
    }
}
class Point{
    point;
    constructor(source){
        this.source = source;
    }
}
const arrayNumbers = [new Slot("Apple", 1, "img/apple.jpg"), new Slot("Bell", 2, "img/bell.jpg"),
new Slot("Cherry", 3, "img/cherry.jpg"), new Slot("Coin", 4, "img/coin.jpg")];
const arraySlots = [ 
    
    new Point(document.getElementById("first-row-first-col")),
    new Point(document.getElementById("first-row-second-col")),
    new Point(document.getElementById("first-row-third-col")),
    
    new Point(document.getElementById("second-row-first-col")),
    new Point(document.getElementById("second-row-second-col")),
    new Point(document.getElementById("second-row-third-col")),

    new Point(document.getElementById("third-row-first-col")),
    new Point(document.getElementById("third-row-second-col")),
    new Point(document.getElementById("third-row-third-col")),
];

let count = 0;
btn.addEventListener('click', () =>{
    btn.disabled = true;
    let interval = 0;
    let intervalNum = 250;
    arraySlots.forEach(element => {
        let i = roll();
         setTimeout(() =>{
            element.point = arrayNumbers[i].point;
            element.source.src = arrayNumbers[i].source;
         }, intervalNum);
        intervalNum += 60;
    });
    interval = 0;
    arraySlots.forEach(element => {
        setTimeout(() =>{
            element.source.classList.add("slot-animate");
        }, interval);
        interval += 50;
    });
    arraySlots.forEach(element =>{
        element.source.addEventListener('animationend', () =>{
            element.source.classList.remove("slot-animate");
        })
    });
   
    setTimeout(() =>{
    if(arraySlots[0].point == arraySlots[1].point && arraySlots[1].point == arraySlots[2].point)
        count++;

    if(arraySlots[3].point == arraySlots[4].point && arraySlots[4].point == arraySlots[5].point)
        count++;

    if(arraySlots[6].point == arraySlots[7].point && arraySlots[7].point == arraySlots[8].point)
        count++;
    score.innerHTML = "Score: " + count;
    
    },intervalNum);
    setTimeout(() =>{btn.disabled = false;}, 1500);
});