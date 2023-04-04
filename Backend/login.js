

export function ajoutListenerLogin() {
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            // Création de l’objet de la combinaison user
            const user = {
                email: event.target.querySelector("[name=email]").value,
                password: event.target.querySelector("[name=password]").value,
            };
            // Appel de la fonction fetch avec toutes les informations nécessaires
            let response = await fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });

            let result = await response.json();  
                if (result.error) {
                    alert("Combinaison E-mail/Mot de passe éronnée") ;
                }else{
                    alert("Bienvenue");
                    window.location.href="./index.html";
            }    
        }); 
}

ajoutListenerLogin();
