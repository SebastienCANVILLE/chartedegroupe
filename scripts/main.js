const button_random_apprenant = document.querySelector("#random_apprenant") /*création de constante non modifiable : selecteur de l'id=random_apprenant de l'index*/
const button_initial_state = "Random Apprenant" /*création constante de l'état inital du bouton*/
const list_apprenant = [  /*création de constante de la liste */
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


function random_apprenant() { /*nom de la fonction à utiliser*/
    button_random_apprenant.setAttribute("value",list_apprenant[Math.floor(Math.random() * 15)]); /*remplacement de l'attribut "value" par la fonction renvoyant un aleatoire*/
    let timerId = setTimeout(()=>{ /* permet d’exécuter une fonction une unique fois après un certain laps de temps*/
        button_random_apprenant.setAttribute("value",button_initial_state); /*remet la value donc le bouton à l'etat initial*/
        clearTimeout(timerId) /*vide le cache memoire*/
    }, 3000) /*temps du timeout en ms*/
}

button_random_apprenant.addEventListener("click",random_apprenant);/*active la fonction par l'action "click"*/



