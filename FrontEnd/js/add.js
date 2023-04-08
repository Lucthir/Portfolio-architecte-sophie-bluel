/*function ajoutListenerAddWork() {
   const addForm = document.querySelector(".add-form");
    addForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const newWork = new FormData()

            newWork.append('image', event.target.querySelector("[name=image]").value)
            newWork.append('title', event.target.querySelector("[name=title]").value)
            newWork.append('category', event.target.querySelector("[name=category]").value)

            console.log(event.target.querySelector("[name=image]").value)
            console.log(event.target.querySelector("[name=title]").value)
            console.log(event.target.querySelector("[name=category]").value)*/
           /*const newWork = {
                image: event.target.querySelector("[name=image]").value,
                title: event.target.querySelector("[name=title]").value,
                category: event.target.querySelector("[name=category]").value,
            }; 
            console.log(JSON.stringify(newWork));*/

           /* let token = window.localStorage.getItem("token");

                let response = await fetch("http://localhost:5678/api/works", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "multipart/form-data; boundary=,",
                        'Authorization': 'Bearer ' + token,
                    },
                    body: newWork,

                });            

                let result = await response.json();  
                    alert(result.message);
                  
        }); 
}

ajoutListenerAddWork();*/

    /*const newWork = document.getElementById('js-add-form');

            alert(newWork);
            alert(JSON.stringify(newWork));

            newWork.onsubmit = async (e) => {
            e.preventDefault();
        
            let response = await fetch("http://localhost:5678/api/works", {
              method: 'POST',
              headers: { 
                "Content-Type": "multipart/form-data; boundary=,",
                'Authorization': 'Bearer ' + token,
                },
              body: new FormData(newWork)
            });
        
            let result = await response.json();
        
            alert(result.message);
          };*/

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
