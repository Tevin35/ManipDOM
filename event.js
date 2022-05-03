function getInputValue() {

    //déclaration du comportement
    console.log("clic sur le bouton btn1");
    let inputValue = document.getElementById("writeThing").value;
    console.log("le contenu du champ texte est " + inputValue);

    //ajout évènement de manière programmatique
    document.getElementById("btn2").addEventListener("click", clicBtn2)

}

function clicBtn2() {
    console.log("j'ai cliqué sur le btn 2 !")
}

function addLink() {

    let elem = document.getElementById("linkEni");

    if (!elem) {

        //création d'une balise a
        let link = document.createElement("a")
        //création de texte
        let linkText = document.createTextNode("ENI")

        //ajout d'attributs sur a
        link.setAttribute("href", "https://www.eni-ecole.fr/")
        link.setAttribute("target", "_blank")
        link.setAttribute("id", "linkEni")

        //ajout du texte dans a
        link.appendChild(linkText)

        //ajout de a dans le DOM
        document.getElementById("btn3").insertAdjacentElement("beforebegin", link)
    }

}

function colorButtons(color){

    //je cherche des inputs qui ont le type button
    let buttons = document.querySelectorAll("input[type='button']");

    for(let i=0; i < buttons.length; i++){
        //classname enlève toutes les classes et remplace
        buttons[i].className = color;
    }

    console.log(buttons)

}

const init = function () {
    document.getElementById("btn3").addEventListener("click", addLink);
}

window.onload = init;