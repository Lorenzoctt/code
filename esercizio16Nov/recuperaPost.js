const myUrl = "https://jsonplaceholder.typicode.com/users";



const myButton = document.getElementById("keyfetch");



function fetchData() {
    fetch(myUrl)
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();

        }).then(postList => {

            console.log(postList);

            const ul = document.createElement("ul");

            for (let index = 0; index < postList.length; index++) {
                //object desctructing
                const { name, email } = postList[index];


                const li = document.createElement("li")
                // const text = document.createTextNode('${name} - ${email}');
                const text = document.createTextNode(name + " " + email);
                li.appendChild(text);

                ul.appendChild(li);
            }
            document.body.appendChild(ul);
        });
};

function fetchData2() {
    fetch(myUrl)
        .then(response => response.json())

        .then(data => console.log(data));
};





myButton.addEventListener("click", fetchData);