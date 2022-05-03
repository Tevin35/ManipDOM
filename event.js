function getInputValue(){

    //déclaration du comportement
    console.log("clic sur le bouton btn1");
    let inputValue = document.getElementById("writeThing").value;
    console.log("le contenu du champ texte est " + inputValue);

    //ajout évènement de manière programmatique
    document.getElementById("btn2").addEventListener("click", clicBtn2)

}

function clicBtn2(){
    console.log("j'ai cliqué sur le btn 2 !")
}

function addLink(){

    //création d'une balise a
    let link = document.createElement("a")
    //création de texte
    let linkText = document.createTextNode("ENI")

    //ajout d'attributs sur a
    link.setAttribute("href", "https://www.eni-ecole.fr/")
    link.setAttribute("target", "_blank")

    //ajout du texte dans a
    link.appendChil(linkText)

    //ajout de a dans le DOM
    document.getElementById("btn3").insertAdjacentElement("beforebegin", link)

}