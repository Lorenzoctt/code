//OK attenzione occorre avviarlo con live server perchè il CORS lo blocca perché non riconosce l'origine come una tra quelle consentite
//https://developer.mozilla.org/it/docs/Web/HTTP/CORS

const willError = "http://httpstat.us/401";
const willNotError = "https://api.valentinog.com/api/link/";

/*  
const response = {
  ok: false,
  json: function(){},
  statusText: "internal server error"
}
*/

// PROMISE
// then()

function fetchData1() {
  fetch(willNotError)
    .then((response) => {

      // if(response.status > 400) throw Error
      if (!response.ok) throw Error(response.statusText);
      console.log(response);
      return response.json();
    })
    .then((json) => { console.log(json); console.log("finito"); })

    .catch((error) => console.log(error.message))
    .finally(() => console.log("I will run, sempre"));
}


// >>>>>>>>>>>>>>METODO 2

// 2017 async/await
// COOPERATIVE MULTITASKING
// CPU BOUND - multiprocessing
// IO BOUND - COOPERATIVE MULTITASKING

// asysnc dichiara la dfunzione asisncrona
async function fetchData() {
  console.log(willNotError);

  const response = await fetch(willNotError);  //await sospende l’esecuzione di una funzione in attesa che la Promise 
  if (!response.ok) throw Error(response.statusText);

  return await response.json();
}

async function main() {
  try {
    const json = await fetchData();//attende il risultato
    console.log(json);
    // LOGICA PER BROWSER
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("I will run, sempre");
  }
}


// const button = document.querySelector("button");
const button1 = document.getElementById("key1");
button1.addEventListener("click", fetchData1);


const button2 = document.getElementById("key2");
button2.addEventListener("click", main);