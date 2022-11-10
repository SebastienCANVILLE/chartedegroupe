const button_random_apprenant = document.querySelector("#random_apprenant")
const button_initial_state = "Random Apprenant"
const list_apprenant = [
    "Sébastien" ,
    "Socunthy",
    "Kévin",
    "Delphine",
    "Jean-François",
    "Sandrine",
    "Alexandre",
    "Jean-Sébastien",
    "Jessie",
    "Arnaud",
    "Laure",
    "Jean-Christophe",
    "Pierre",
    "Johann",
    "Stéphane",
    "Terry",
]


function random_apprenant() {
    button_random_apprenant.setAttribute("value",list_apprenant[Math.floor(Math.random() * 15)]);
    let timerId = setTimeout(()=>{
        button_random_apprenant.setAttribute("value",button_initial_state);
        clearTimeout(timerId) 
    }, 3000)
}

button_random_apprenant.addEventListener("click",random_apprenant);



