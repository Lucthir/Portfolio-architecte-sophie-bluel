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

//Gallery mini
async function deleteWork() { 

    
       
    const workToDelete = JSON.parse(window.localStorage.getItem('worksids'))
   
    const validSuppress = confirm("Etes Vous Sur de vouloir supprimer ce travail ?")

        if (validSuppress === true) {
            alert("suppression")

            let id = workToDelete[0]

            let token = window.localStorage.getItem("token");

            let response = await fetch(`http://localhost:5678/api/works/${id}`, {
                method: "DELETE",
                headers: {   
                    'Authorization': 'Bearer ' + token,
                },
                
         })

         
    
        //console.log(workToDelete[0]) 
    
}}


export function generateWorksMini(works) {
    
    
    
    for (let i=0; i < works.length; i++) {

        const article = works[i];
        
        const sectionGalleryMini = document.querySelector(".gallery-mini");
        const workElement = document.createElement("article");
        workElement.dataset.id = works[i].id;
        const deleteIcon = document.createElement("a");
        deleteIcon.setAttribute('class', 'delete-icon')
        deleteIcon.id = works[i].id;
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        const moveIcon = document.createElement("i");
        moveIcon.setAttribute('class', 'fa-solid fa-arrows-up-down-left-right');
        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;
        const editElement = document.createElement("a");
        editElement.setAttribute('href', '#')
        editElement.innerText = "éditer";
        
        //PB je dois save le CSS pour que les icones apparaissent correctement

        sectionGalleryMini.appendChild(workElement);
        workElement.appendChild(deleteIcon);
        workElement.appendChild(moveIcon);
        workElement.appendChild(imageElement);
        workElement.appendChild(editElement);
   
        //PB Obligé de faire l'event listener dans generate works ? car deleteIcon que ici et pas possible de queryselector sur un createElement

        
        deleteIcon.addEventListener('click', pushID)
       
       function pushID() {
                let worksIDArray = []
                worksIDArray.push(deleteIcon.id)
                console.log(worksIDArray) 
                window.localStorage.setItem('worksids', JSON.stringify(worksIDArray))
                deleteWork()
            }
    
    }
    
        

        
        
}

generateWorksMini(works);



//gestion boutons

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

