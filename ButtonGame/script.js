const buttons = document.querySelectorAll(".button-container button ");
const clickCountElement = document.getElementById("clickCount");
const resetButton = document.getElementById("reset-btn");
let totalClicks = 0;

const de = document.getElementById("child-btn");

buttons.forEach((button)  => {
    button.addEventListener("click" , () => {
        totalClicks++;
        clickCountElement.textContent = totalClicks;
        button.style.backgroundColor = "lightgreen";
        button.textContent  = "Clicked";
        setTimeout(() => {
            button.style.backgroundColor = ""
            button.textContent ="Button";
        }, 3000);
    })
})

function clickCount(ev){
    console.log(ev);
    console.log(ev.target.value);

}
const childBtn  = document.getElementById("childBtn");
childBtn.addEventListener(
    "click" , 
    () => {
        alert("Advanced option TRiggered : This runs only once!");

    }, 
    {once : true}
);

const removableBtn = document.getElementById("removableBtn");

function removableHandler(){
    alert ("Removable Listener Triggered!");
}

