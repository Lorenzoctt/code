const myUrl = "https://jsonplaceholder.typicode.com/users";



const myButton = document.getElementById("keyfetch");


//recupera un oggetto da internet e aggiunge la lista li sullo schermo 
function fetchData() {
    console.log("inizio");

    // fetch('http://example.com/movies.json')
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    fetch(myUrl)
        .then((response) => {
            if (!response.ok) throw Error(response.statusText); //throw genera l'errore 
            return response.json();//se ok si estrae la risposta nel formato json 

        }).then(postList => {

            console.log(postList);

            const ul = document.createElement("ul");

            for (let index = 0; index < postList.length; index++) {
                //object desctructing
                const { name, email } = postList[index];


                const li = document.createElement("li")
                const text = document.createTextNode(`${name} - ${email}`);
                //const text = document.createTextNode(name + " " + email);
                li.appendChild(text);

                ul.appendChild(li);
            }
            document.body.appendChild(ul);
        });
};




myButton.addEventListener("click", fetchData);