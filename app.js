let todo = document.getElementById("todo");
let myplus = document.getElementById("plus");
let list = document.getElementById("list")

myplus.addEventListener("click", (e) => {

    let _list = document.createElement("div")
    _list.setAttribute("class", "myInput")

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "myCheckbox");
    _list.appendChild(check)

    let deleted = document.createElement("i");
    deleted.setAttribute("class", "fas fa-trash");
    deleted.setAttribute("id", "trash");
    _list.appendChild(deleted)

    _list.innerHTML += todo.value
    list.prepend(_list)
    todo.value = ""
    console.log(deleted)

    let btndelete = document.getElementById("trash")
    console.log(btndelete)
    btndelete.addEventListener("click",()=>{
        _list.remove()
    })


    let btncheck = document.getElementById("myCheckbox")
    btncheck.addEventListener("change", (e) => {

        if (e.target.checked == true) {
            _list.style.backgroundColor = "#5529DC";
            _list.style.color = "white";
            _list.style.textDecoration = "line-through";
            _list.style.textDecorationColor = "white";
        }
        else if (e.target.checked == false) {
            _list.style.backgroundColor = "";
            _list.style.color = "black";
            _list.style.textDecoration = "";
        }

    })


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



