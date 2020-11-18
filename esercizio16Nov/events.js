
const allElements = document.querySelectorAll("li");
const thirdElement = allElements[2];

thirdElement.addEventListener("click", handleClick);

function handleClick() {
    console.log("sono stato cliccato  XX");
}


const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();  // a cosa serve : evita la propagazione

    //raccolta degli input , utilizza il metodo Form
    const data = new FormData(this);
    console.log(data);
    //INVIA DATI 

    const baseUrl = "https://jsonplaceholder.typicode.com";
    //Promise
    //() => {} ARROW FUNCTION

    const requestConfig = {
        method: "POST",
        body: data,
    };
    //--------------------
    fetch('https://jsonplaceholder.typicode.com')
        .then(response => response.json())
        .then(data => console.log(data));
    //-------------------------

    //fetch(`${baseUrl}/users/`, requestConfig)    
    // fetch(`${baseUrl}/users`, requestConfig)    //Ottiene una lista dati con GET
    //     .then((response) >=
    //         //   if(!response.ok) throw Error(response.statusText);
    //         response.json() //JSON

    //             .then(json =>
    //                 console.log(json))
    //     );



    console.log(data);
    console.log("Form inviato");
}



// BUBBLING ??