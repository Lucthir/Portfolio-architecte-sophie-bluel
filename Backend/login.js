

export function ajoutListenerLogin() {
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Création de l’objet de la combinaison user
        const user = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=password]").value,
        };
        // Appel de la fonction fetch avec toutes les informations nécessaires
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
    });
    const reponse = fetch("http://localhost:5678/api/users/login");
    if (reponse.id != 0) {
        alert("OK");
    }

}

