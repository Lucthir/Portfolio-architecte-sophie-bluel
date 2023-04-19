//Recuperation Données API

window.localStorage.removeItem('works');
let works = window.localStorage.getItem('works');

if (works === null) {
    // Récupération des travaux depuis l'API
    const reponse = await fetch('http://localhost:5678/api/works');
    works = await reponse.json();
    // Transformation des travaux en JSON
    const valeurWorks = JSON.stringify(works);
    // Stockage des informations dans le localStorage
    window.localStorage.setItem("works", valeurWorks);
} else {
    works = JSON.parse(works);
}


//Fonction de génération des travaux à partir de l'API

function generateWorks(works) {
    
    for (let i=0; i < works.length; i++) {

        const article = works[i];
        // Récupération de l'élément du DOM qui accueillera les elements gallery
        const sectionGallery = document.querySelector(".gallery");
        // Création d’une balise dédiée à un travail
        const workElement = document.createElement("article");
        workElement.dataset.id = works[i].id;
        // Création des balises titres et images
        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;
        const titleElement = document.createElement("h3");
        titleElement.innerText = article.title;

        // On rattache la balise article a la section Gallery
        sectionGallery.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(titleElement);
    }
}

generateWorks(works);


//Fonction de suppression des travaux

async function deleteWork() { 
   
    const workToDelete = JSON.parse(window.localStorage.getItem('worksIds'))  
    const validSuppress = confirm("Etes-vous sûr de vouloir supprimer ce travail ?")

        if (validSuppress === true) {
           
            let id = workToDelete[0]
            let token = window.localStorage.getItem("token");

            await fetch(`http://localhost:5678/api/works/${id}`, {
                method: "DELETE",
                headers: {   
                    'Authorization': 'Bearer ' + token,
                },                
         })   
}}


//Fonction de création de la gallery en petit format dans la modale

export function generateWorksMini(works) {
       
    for (let i=0; i < works.length; i++) {

        const article = works[i];  
        const sectionGalleryMini = document.querySelector(".gallery-mini");
        const workElement = document.createElement("article");
        workElement.dataset.id = works[i].id;
        const deleteIcon = document.createElement("a");
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can" id="trash-can"></i>'
        deleteIcon.setAttribute('class', 'delete-icon')       
        deleteIcon.id = works[i].id;
        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;
        const editElement = document.createElement("a");
        editElement.setAttribute('href', '#');
        editElement.innerText = "éditer";
        sectionGalleryMini.appendChild(workElement);
        workElement.appendChild(deleteIcon);
        workElement.appendChild(imageElement);
        workElement.appendChild(editElement);
    
        deleteIcon.addEventListener('click', pushID)

       //Fonction qui, à chaque click sur l'icone de delete, stocke l'ID du travail en question pour l'utiliser dans deleteWorks ensuite
       function pushID() {  
                let worksIDArray = []
                worksIDArray.push(deleteIcon.id)
                console.log(worksIDArray) 
                window.localStorage.setItem('worksIds', JSON.stringify(worksIDArray))
                deleteWork()
            }
    }      
}

generateWorksMini(works);



//Gestion des boutons

//filter All

const buttonAll = document.querySelector(".btn-all");

    buttonAll.addEventListener("click", function() {
        document.querySelector(".gallery").innerHTML = "";
        generateWorks(works);
})


//Filter Objects

const buttonObjects = document.querySelector(".btn-objects");

    buttonObjects.addEventListener("click", function() {
        const worksObjects = works.filter(function(works) {
            return works.categoryId == 1;
        });
        document.querySelector(".gallery").innerHTML = "";
        generateWorks(worksObjects);

})

//Filter Appartments

const buttonAppartments = document.querySelector(".btn-appartments");

    buttonAppartments.addEventListener("click", function() {
        const worksAppartments = works.filter(function(works) {
            return works.categoryId == 2;
        });
        document.querySelector(".gallery").innerHTML = "";
        generateWorks(worksAppartments);

})

//Filter Appartments

const buttonHotels = document.querySelector(".btn-hotels");

    buttonHotels.addEventListener("click", function() {
        const worksHotels = works.filter(function(works) {
            return works.categoryId == 3;
        });
        document.querySelector(".gallery").innerHTML = "";
        generateWorks(worksHotels);

});

