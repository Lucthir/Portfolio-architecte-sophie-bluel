//Fonction de Display de mode admin

const displayEdit = function () {
    const editDisplays = document.querySelector(".edit")
    editDisplays.removeAttribute('style')
    document.querySelector(".filters").setAttribute('style', 'display:none')
    document.querySelector("#logout-btn").removeAttribute('style')
    document.querySelector("#login-btn").setAttribute('style', "display:none")
    document.querySelectorAll(".modify").forEach(a => {
        a.removeAttribute('style')
    })    
}

let token = window.localStorage.getItem("token");

if (token !== null) {
    displayEdit()
}

//Fonction de Logout

const logout = function () {
    //console.log("fonction logout declenchée")
      localStorage.clear();
  }
  
  
document.querySelector('#logout-btn').addEventListener('click', logout)
  
      