const inputBox=document.getElementById("input");
const list =document.getElementById("lists");

function update(){
    if(inputBox.value===''){
        alert("Please enter your task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="clear";
        li.appendChild(span);
    }
    inputBox.value="";
    saveTask();
}

list.addEventListener("click", function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
    
},false);

function saveTask(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}

showTask();