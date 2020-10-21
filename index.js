console.log("Marco è bravo 3");


const header = document.querySelector("h1");
header.innerText = "AAAA"

/* funzione per determinare l'elemnto richiamato per tag o per tag */
function selectElement(selector) {

    const tags = ["h1", "h2", "p"];  // creo array con 3 tag
    if (tags.includes(selector)) {

        return document.getElementsByTagName(selector)[0];
    }
    else {
        return document.getElementById(selector);

    }

}
console.log("1 selectElement " + "h2");
console.log(selectElement("h2"));
console.log("----------------");
console.log("2 selectElement id= " + "primoTag");
console.log(selectElement("primoTag"));

//AAA