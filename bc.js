let blue = document.getElementById("1");
let green = document.getElementById("2");
let red = document.getElementById("3");
let purple = document.getElementById("4");

blue.addEventListener("click", (e)=>{
    setTimeout(()=>{
        if(blue.style.backgroundColor){
            blue.style.backgroundColor = "";
        } else {
            blue.style.backgroundColor = "blue";
        }
    }, 2000);
});

green.addEventListener("click", (e)=>{
    setTimeout(()=>{
        if (green.style.backgroundColor){
            green.style.backgroundColor = "";
        } else {
            green.style.backgroundColor = "green";
        }
    }, 1500);
});

red.addEventListener("click", (e)=>{
    setTimeout(()=>{
        if (red.style.backgroundColor){
            red.style.backgroundColor = "";
        } else {
            red.style.backgroundColor = "red";
        }
    }, 1000);
});

purple.addEventListener("click", (e)=>{
    setTimeout(()=>{
        if (purple.style.backgroundColor){
            purple.style.backgroundColor = "";
        } else {
            purple.style.backgroundColor = "purple";
        }
    }, 500);
});