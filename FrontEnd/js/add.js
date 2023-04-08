function ajoutListenerAddWork() {
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

ajoutListenerAddWork()

function deleteWork() {
    
}

deleteWork()
