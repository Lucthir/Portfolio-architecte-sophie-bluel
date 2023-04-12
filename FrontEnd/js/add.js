function addWork() {
    const selectForm = document.querySelector(".add-form");
    selectForm.addEventListener("submit", sendWork)

    async function sendWork (e) {
        
        e.preventDefault()
        
        for(let input of document.querySelectorAll(".add-form input select")){
                    input.reportValidity();
                }

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







const loadFile = function(event) {
    var output = document.getElementById('miniDisplay');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
    document.querySelector(".fa-image").style.display = 'none'
    document.querySelector(".custom-image-button").style.display = 'none'
    document.querySelector(".p-file-types").style.display = 'none'
  };










