const h1 = document.getElementById("Heading");
console.log(h1);

const Bt = document.getElementById("Btn");
const h2 = document.getElementById("Paragraph");
const ll = document.getElementById("list");
const ad = document.getElementById("add");
const re = document.getElementById("Remove");

//highlight paragraph an dtitile when button is clicked

Bt.addEventListener("click", () =>{
    console.log("button clicked")
    h1.style.color="blue";
    h2.style.fontWeight = "Bold";
    h2.style.color= "blue";
    ll.style.color= "blue";
  
});

ad.addEventListener("click", () =>{
    console.log("Button Clicked")
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.childElementCount + 1}`;
    newItem.className = "list-item"; // assign class to new item
    list.appendChild(newItem);

});

re.addEventListener("click",() => {
    if(list.childElementCount >0){
        list.removeChild(list.lastElementChild);
        console.log("last item removed");
    }else{
        console.log("No items to remove");
}

})



