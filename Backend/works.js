function generateWorks(works) {
    for (let i=0; i<works.length; i++) {
        const article = works[i];
        const sectionGallery = document.querySelector(".gallery");
        const workElement = document.createElement("article");
        workElement.dataset.id = works[i].id
        const imageElement = document.createElement("img");
        imageElement.src = article.imageURL;
        const titleElement = document.createElement("h2");
        titleElement.innerText = article.title;
        const categoryElement = document.createElement("p");
        categoryElement.innerText = article.category.name;


        sectionGallery.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(titleElement);
        workElement.appendChild(categoryElement);
    }
}

generateWorks(works);