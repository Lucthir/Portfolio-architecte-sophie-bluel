//Fonction n'activant le bouton d'envoi du travail que lorsque tous les champs sont remplis

function checkAddForm () {
    let file = document.querySelector("#input-image");
    let text = document.querySelector("#input-title");
    let button = document.querySelector("#add-submit");

    button.disabled = true;

    file.addEventListener("input", stateHandle);
    text.addEventListener("input", stateHandle);
    

    function stateHandle() {
        //console.log(file.value)
        //console.log(text.value)
        if (file.value === "") {
            button.disabled = true; //button reste désactivé
            button.style.backgroundColor = "#A7A7A7"      
        } else {
            button.disabled = false;//button activé
            button.style.backgroundColor = "#1D6154" 
            button.style.cursor = "pointer"
        }
    }  
}

for(let input of document.querySelectorAll(".add-form input")){
    input.reportValidity();
    }

let goToAddModal = document.querySelector(".js-modal-add")
    goToAddModal.addEventListener('click', checkAddForm)


//Fonction permettant d'envoyer le nouveau travail avec image titre et category

function addWork() {
    const selectForm = document.querySelector(".add-form");
    selectForm.addEventListener("submit", sendWork)

    async function sendWork (e) {
        
        e.preventDefault()
        const newWork = document.querySelector("#js-add-form");
        const formData = new FormData(newWork);
          
            /*for (var key of formData.entries()) {
                console.log(key[0] + ', ' + key[1]);
            }*/

        let token = window.localStorage.getItem("token");

        let response = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {   
                'Authorization': 'Bearer ' + token,
            },
            body: formData,
        });
        
            
        let result = await response.json(); 
            //alert(JSON.stringify(result))
            if(JSON.stringify(result)!= '{"error":{}}') {
                alert("Projet Ajouté")
                window.location.href="./index.html";
            } else {
                alert("Les informations sont incorrectes/manquantes")
            }

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










