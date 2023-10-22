let todolist=JSON.parse(localStorage.getItem("todolist"))||[]

function addtolist(){
    const text =document.getElementById("text").value
    const date =document.getElementById("date").value
    const color =document.getElementById("color").value

    if(date===""||text===""){
        alert("more input")
    }else{
        todolist.push({text,date,color})
        console.log(todolist)
        document.getElementById("text").value=""
        document.getElementById("color").value="#ffffff"
        document.getElementById("date").value=""
        renderlist()
    }
   
}

function renderlist(){
    let htmltext=""
    for(i=0;i<todolist.length; i++){
        const {text,date, color}=todolist[i];
        htmltext =`${htmltext} 
        <div class="itembox" style="background-color: ${color};">
            <div class="textitem">${text}</div>
            <div class="textitem">${date}</div>
            <button onclick="deleteitem(${i})">delete</button>
        </div>`
    }
    document.getElementById("list").innerHTML=htmltext
    todostring=JSON.stringify(todolist)
    console.log(todostring)
    localStorage.setItem("todolist",todostring)
}
function deleteitem(number){
    todolist.splice(number,1);
    renderlist()
}
renderlist()
