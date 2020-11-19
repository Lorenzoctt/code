// KO ? NON SONO SICURO CHE FUNZIONI
// invia i dati dopo avere premuto invio , cattura il submit dal form

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const button = document.getElementById("keySend");
button.addEventListener("submit", handleSubmit);


function handleSubmit(event) {

    const baseUrl = "https://jsonplaceholder.typicode.com";
    event.preventDefault();  // a cosa serve : evita la propagazione

    //raccolta degli input , utilizza il metodo Form
    console.log(this);
    const data = new FormData(this);
    console.log(data);
    //INVIA DATI 


    //Promise
    //() => {} ARROW FUNCTION

    const requestConfig = {
        method: "POST",
        body: data,
    };
    //--------------------
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch(`${baseUrl}/users/`, requestConfig) // GET List()
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            // JSON: JavaScript Object Notation
            console.log(response.statusText);
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
    //-------------------------

    console.log(data);
    console.log("Form inviato");
}




