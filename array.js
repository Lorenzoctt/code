/* 

//array


/* ------------------------ */

/* const list = ["7", "3", "f", {
    tipocarne: "bianca", animale: "maiale"
}];  //ARRAY

console.log("XXXXXXXXXXXXXXXXXXX");
console.log(list[1]);


console.log(list[3].animale); */



const strings = [
    "a", "b", "pollo", "brace", "arrosticini"
];

function strToUppercase(par1) {
    return par1.toUpperCase();
};




console.log(strToUppercase(strings[1]));

function addOne(el) {
    return el + 1;

}

const trasformed = strings.map(strToUppercase).map(addOne);// prende in automatico gli elementi dell'array e lo assegno all'array trasformed
//console.log(trasformed);
/* 
------------------------------------------- */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Molt4(el) {
    //  return el * 4;
    return el + "=" + el * 4;
}

const trasformed2 = numbers.map(Molt4);
console.log(trasformed2);
/* ------------------------------------------------ */

/* array con 2 oggetti */

const users = [
    { email: 'giovanni@gmail.com', display: 'giova38' },
    { email: 'giangiorgio@toptech.com', display: 'giangi23' }
];

console.log(users[0]);
console.log(users[0].display);

/* ----------------------------------- */
/* stampa la somma di 2 liste di numeri */
const list1 = [1, 2, 3, 4, 5];
const list2 = [3, 4, 5, 6, 7];

function stampaSommaListe(l1, l2) {
    for (let index = 0; index < (Math.min(l1.length, l2.length)); index++) {
        var element = l1[index] + l2[index];
        console.log(element);

    }

    // return element;
}

console.log(">>>>>>>>>>>>>> stampa la somma di 2 liste di numeri");
stampaSommaListe(list1, list2);
/* 
------------------------ */



/* -------------------- */
function richiesta() {
    var person = window.prompt("Please enter your name", "Lorenzo");
    //return person.toUpperCase();
    window.alert("questo è il tuo nome: " + person.toUpperCase());

}
//window.alert("questo è il tuo nome: " + richiesta());


document.getElementById("GetNome").addEventListener("click", richiesta);
