function loadContent() {
    console.log("Salut ! j'excute la fonction !");

    //Création d'un élément html
    let input = document.createElement("input");

    //settage de ces attributs
    input.setAttribute("type", "button");
    input.setAttribute("id", "myButton");
    input.setAttribute("value", "Save");

    //récupération de ma balise h1
    let title = document.getElementById(" myTitle");

    //insertion de mon input après le h1
    title.insertAdjacentElement("afterend", input);

    //modification du texte de mon h1
    title.innerText = "Mon nouveau titre"
    title.setAttribute("class", "myclass")

    //récupération de tous les élémentss qui ont la class myClass
    let elements = document.getElementsByClassName("myClass")

    console.log(elements);


    //////////////////////////////////////////////////////////////////////////////

    let div = document.createElement("div");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.innerText ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dolore ex expedita facere hic inventore ipsum iste nemo neque perferendis quam unde velit veritatis, vero! A nesciunt officiis praesentium."
    p2.innerText ="Accusamus corporis deleniti dolor, pariatur quas quidem ratione rem. Aliquam, aperiam commodi culpa dicta dolores, eius hic minima neque perspiciatis quod rerum, unde voluptate voluptatem. Maxime nulla reiciendis sed vero?"

    div.appendChild(p1);
    div.appendChild(p2);

    title.insertAdjacentElement("afterend", div)
}