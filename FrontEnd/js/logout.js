const logout = function () {
  console.log("fonction logout declenchée")
    localStorage.clear();
}


document.querySelector('#logout-btn').addEventListener('click', logout)

    