

// let name = document.getElementById("fullName");
function changeName(ev){
    console.log(ev);
    console.log(ev.target.value);
}
    // name.addEventListener("change", changeName)


function changeAddress(event){
    console.log(event);
    console.log(event.target.value);
}

function changeEmail(event){
    console.log(event);
    console.log(event.target.value);
}


function changePasswordd(event){
    console.log(event);
    console.log(event.target.value);
}
document.addEventListener("DOMContentLoaded", () => {
    let pw = document.getElementById("passwordd");
    pw.addEventListener("change", changePasswordd)
})
