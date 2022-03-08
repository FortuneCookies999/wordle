var answer = "";
const summitBtn = document.querySelector(".submit");
var number = 1;
var data = ["subway",
    "museum",
    "absent",
    "soviet",
    "taiwan",
    "kapkas",
    "mongol",
    "rondon",
    "france",
    "poland",
    "italia",
    "pencil",
    "greece",
    "school",
    "israel",
    "moroco",
    "travel",
    "canada",
    "eleven",
    "twenty",
    "friday",
    "mexico",
    "brazil",
    "window",
    "sweden",
    "zombie",
    "yellow",
    "orange",
    "healer",
    "genius",
    "engine"];

function check(){
    if(number <= 6){
       var idName = `#div_${number}`;
       const div = document.querySelector(idName);
       for(let i = 1; i < 7; i++){
            const className = `.input_${i}`;
            const input = div.querySelector(className);
            if(input.value === answer[i-1]){
                input.classList.add('green');
            }else if(answer.includes(input.value)){
                input.classList.add('yellow');
            }else{
                input.classList.add('gray');
            }
       }
       number++;
    }
}

function init(){
    var n = Math.floor(Math.random()*data.length);
    answer = data[n];
    summitBtn.addEventListener('click', check);
}

init();