function loadContent(){
    console.log("Salut ! j'excute la fonction !");
    let input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("id", "myButton");
    input.setAttribute("value", "Save");
    let title = document.getElementById(" myTitle");

    title.insertAdjacentElement("afterend", input);
}