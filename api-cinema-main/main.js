
 const texte = document.querySelector("#texte");
 

const btn = document.querySelector("#btn")
btn.addEventListener("click" ,(e)=>{
  e.preventDefault();
  document.querySelector(".movies").innerHTML = "";
  
const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '856f171907msh02972d94c5c32c9p198b57jsn011056d02f2f',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
      
  fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+ texte.value, options)
  .then(response => response.json())

//   if (response.status == 404){ console.log("erreur 404 page not found ")
  
// } else {

//  } 
 .then((data) => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const year = item.y;
      const rank = item.rank; 
      const title =item.q;
      const actor =item.s;
      const movie = `
            <li>
            <img src="${poster}">
                <h2>Genre:${title}<h2>
                <h2>Titre :${name}</h2>
                <h2>Acteurs:${actor}</h2>
                <h3> Année de sortie:${year}</h3> 
                <h4> Classement:${rank} <h4>
            </li>`;
      document.querySelector(".movies").innerHTML += movie;
      
    });
  })
  .catch((err) => console.error(err));


})  

const bouton = document.getElementById("bouton");
const body =document.getElementById("body");


// const btn = document.getElementById("btn");


bouton.addEventListener("click",()=> {
body.classList.toggle("mystyle");

}
)
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e51f633b25msh0a7541bb59cbae8p1b7e46jsncc5ec836e7a9",
//     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://online-movie-database.p.rapidapi.com/auto-complete?q=ipman",
//   options
// )

