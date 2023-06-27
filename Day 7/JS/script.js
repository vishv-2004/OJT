const circle = document.querySelector(".one")
function colorChange(event){
    console.log("This is color",event.target.value);
    document.getElementById("one").style.backgroundColor=event.target.value
}

function borderChange(event){
    console.log("This is color",event.target.value);
    document.getElementById("one").style.borderColor=event.target.value
}