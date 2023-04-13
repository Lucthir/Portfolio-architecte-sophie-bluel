//Fonction n'activant le bouton d'envoi du travail que lorsque tous les champs sont remplis

function checkAddForm () {
    let file = document.querySelector("#input-image");
    let text = document.querySelector("#input-title");
    let button = document.querySelector("#add-submit");


    button.disabled = true; //setting button state to disabled

    file.addEventListener("change", stateHandle);
    text.addEventListener("change", stateHandle);

    function stateHandle() {
        if (document.querySelector("#input-image").value === null || document.querySelector("#input-title").value === "") {
            button.disabled = true; //button remains disabled
        } else {
            button.disabled = false;//button is enabled
            button.style.backgroundColor = "#1D6154" 
        }
    }
    
}

let goToAddModal = document.querySelector("#go-to-add-modal-btn")
    goToAddModal.addEventListener('click', checkAddForm)

for(let input of document.querySelectorAll(".add-form input")){
          input.reportValidity();
    }

//Fonction permettant d'envoyer le nouveau travail avec image titre et category

function addWork() {
    const selectForm = document.querySelector(".add-form");
    selectForm.addEventListener("submit", sendWork)

    async function sendWork (e) {
        
        e.preventDefault()

            

            const newWork = document.querySelector("#js-add-form");

            const formData = new FormData(newWork);
          
                for (var key of formData.entries()) {
                    console.log(key[0] + ', ' + key[1]);
                }

                
            
            let token = window.localStorage.getItem("token");

            let response = await fetch("http://localhost:5678/api/works", {
                method: "POST",
                headers: {   
                    'Authorization': 'Bearer ' + token,
                },
                body: formData,

            });
            
            
            let result = await response.json(); 
                
                alert(JSON.stringify(result))  
                
                window.location.href="./index.html";

    }
}

addWork()




//fonction d'affichage de l'image quand elle est prête a etre uploadée


const loadFile = function(event) {
    var output = document.getElementById('miniDisplay');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src)
    }
    document.querySelector(".fa-image").style.display = 'none'
    document.querySelector(".custom-image-button").style.display = 'none'
    document.querySelector(".p-file-types").style.display = 'none'
  };










