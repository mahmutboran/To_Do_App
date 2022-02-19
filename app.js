let todo = document.getElementById("todo");
let myplus = document.getElementById("plus");
let list = document.getElementById("list")

let completed=()=>{
    let checkedCount=list.getElementsByClassName("tik1").length
    const taskCount=list.getElementsByClassName("myInput").length
    const checkedTasks = document.getElementById("completed") 
    checkedTasks.innerText=`${checkedCount} out of ${taskCount} task completed`
}


myplus.addEventListener("click", (e) => {
    if (todo.value == "") {
        alert("Must be filled out");
    } else {
        let _list = document.createElement("div")
        _list.setAttribute("class", "myInput")

        const check = document.createElement("input")
        check.setAttribute("type", "checkbox");
        check.setAttribute("id", "myCheckbox");
        check.setAttribute("class", "tik");
        _list.appendChild(check)

        const deleted = document.createElement("i");
        deleted.setAttribute("class", "fas fa-trash");
        deleted.setAttribute("id", "trash");
        _list.appendChild(deleted)

        _list.innerHTML += todo.value
        list.prepend(_list)
        todo.value = ""


        const btndelete = document.getElementById("trash")
        btndelete.addEventListener("click", () => {
            _list.remove()
            completed()
        })

     
  
        const btncheck = document.getElementById("myCheckbox")
        btncheck.addEventListener("change", (e) => {
        

            if (e.target.checked == true) {
                _list.style.backgroundColor = "#5529DC";
                _list.style.color = "white";
                _list.style.textDecoration = "line-through";
                _list.style.textDecorationColor = "white";
                e.target.className="tik1";
                completed();


            }
            else if (e.target.checked == false) {
                _list.style.backgroundColor = "";
                _list.style.color = "black";
                _list.style.textDecoration = "";
                e.target.className="tik";
                completed()
  

            }

    
     
        })

     


    }
    /* newP = document.getElementsByTagName("p")   
     Array.from(newP).forEach(e => {
    
            e.addEventListener("change", (k) => {
                console.log(k)
                if (k.target.checked) {
                    e.style.backgroundColor = "#5529DC";
                    e.style.color= "white";
                    e.style.textDecoration= "line-through";
                    e.style.textDecorationColor= "white";
                }
              else{
                    e.style.backgroundColor = "";
                    e.style.color= "black";
                    e.style.textDecoration= "";
                    
                }
            })
        }); */
})



