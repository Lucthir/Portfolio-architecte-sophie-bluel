function ajoutListenerAddWork() {
    const addForm = document.querySelector(".add-form");
    addForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            // Création de l’objet de la combinaison user
            const newWork = {
                image: event.target.querySelector("[name=image]").value,
                title: event.target.querySelector("[name=title]").value,
                category: event.target.querySelector("[name=category]").value,
            };
            // Appel de la fonction fetch avec toutes les informations nécessaires
            let response = await fetch("http://localhost:5678/api/works", {
                method: "POST",
                headers: { 
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MDc2NzQ3NSwiZXhwIjoxNjgwODUzODc1fQ.NG32jMHMHiszMQ1bUZJ1_UF7FoAvaxep0xHv1yk2yqo',
                },
                body: JSON.stringify(newWork)
            });

            let result = await response.json();  
                if (result.error) {
                    alert("Erreur dans le formulaire") ;
                }else{
                    window.location.href="./index.html";
            }    
        }); 
}

ajoutListenerAddWork();