var loki = JSON.parse(localStorage.getItem("loki"))
if (loki == null)
    loki = [];
console.log(loki)

// no 1 to  creating a  user 
function getdata() {
    var info = {
        username: "",
        email: "",
        password: "",
        cpassword: ""
    }

    for (a in info) {
        info[a] = document.getElementById(a).ariaValue
    }
    console.log(info)
    loki.push(info)
    localStorage.setItem("loki", JSON.stringify(loki))
    displaying()
    claerdate(info)
}


function displaying() {
    document.querySelector("tbody").innerHTML = ""
    surya.forEach((info, i) => {
        var mytr = document.createElement("tr")
        for (a in info) {
            var mytd = document.createElement("td")
            mytd.innerHTML = info[a]
            mytr.appendChild(mytd)
        }
        var Edittd = document.createElement("td")
        var Deletetd = document.createElement("td")
        mytr.appendChild(Edittd)
        mytr.appendChild(Deletetd)

        var editbutton = document.createElement("button")
        editbutton.setAttribute("onclick", "getedit(" + i + ")")
        editbutton.innerHTML = "Edit"
        var deletebutton = document.createElement("button")
        deletebutton.setAttribute("onclick", "getdelete(" + i + ")")
        deletebutton.innerHTML = "Delete"
        Edittd.appendChild(editbutton)
        Deletetd.appendChild(deletebutton)



        document.querySelector("tbody").appendChild(mytr)

    })
}
displaying()

function getedit(i) {
    document.getElementById("sumbit").style.display = "none"
    document.getElementById("upade").style.display = "block"
    var raju = loki[i]
    for (a in raju) {
        document.getElementById(a).value = raju[a]
    }
}
function getdelete(i) {
    loki.splice(i, 1)
    localStorage.setItem("loki", JSON.stringify(loki))
    displaying()
}
function claerdate(info) {
    for (a in info) {
        document.getElementById(a).value = ""
    }
}

function update() {
    var info = {
        username: "",
        email: "",
        password: "",
        cpassword: ""
    }
    for (a in info)
        info[a] = document.getElementById(a).valu

}