// ============ CLASS PLAYER ============
class Player {
    constructor(name, score, score2){
        this.name = name
        this.score = score
        this.score2 = score2
    }
}
class Map {
    constructor(name, player){
        this.name = name
        this.player = []

    }
}

let p1 = new Player("Louisan", 25000, 2000)
let p2 = new Player("Benjos", 10000, 3000)
let p3 = new Player("Djédjé", 9000, 1000)
let p4 = new Player("Julien", 13000, 7000)
let p5 = new Player("Alexis", 7000, 200)

let map1 = new Map("MAP 1")
let map2 = new Map("MAP 2")
let map3 = new Map("MAP 3")
let map4 = new Map("MAP 4")
let map5 = new Map("MAP 5")

playerList = [p1, p2, p3, p4, p5]
mapList = [map1, map2, map3, map4, map5]

// ============ AFFICHER BOUTON MAP ============

let i = 1000
for(map of mapList){
    let id = i
    id = String(id)
    button = document.createElement("button")
    button.id = id 
    button.innerText = map.name
    divBouton = document.querySelector("div.button")
    divBouton.append(button)
    
    let btn = document.getElementById(id)
    btn.addEventListener('click', () =>{
    btn.classList.toggle("background")
    btn.classList.toggle("textColor")
    resetContain(contain)    
    scoreboard()
})
    id = parseInt(id)
    i--
}

// ============ AFFICHER JOUEUR SCOREBOARD ============

//container classement
let contain = document.createElement("div")
contain.className = "contain"


// Afficher les joueurs dans le scoreboard
function scoreboard(){
    let listSize = playerList.length
    let i = 0
    let place = 1
    let id = i
    while(i < listSize){
        // conversion string pour id 
        id = String(id)
        place = String(place)

        // Creation div classement
        let classement = document.createElement("div")
        classement.className = "classement"
        classement.id = id

        // span Numero
        let spanNumber = document.createElement("span")
        spanNumber.className = "place"
        spanNumber.classList.add("numero")
        spanNumber.innerText = place

        // span nom du joueur
        let spanName = document.createElement("span")
        spanName.className = "joueur"
        spanName.classList.add("nom")
        spanName.innerText = playerList[i].name

        // span de son nombre de points
        let spanPoints = document.createElement("span")
        spanPoints.className = "points"
        spanPoints.classList.add("puntos")
        spanPoints.innerText = playerList[i].score

    
        // Création de hr et ajout à la page
        let hr = document.createElement("hr")
        container = document.querySelector("div.container")
        container.append(contain)
        contain.append(classement)

        // Ajout de tous les span dans la div classement
        let div = document.getElementById(id)
        div.append(spanNumber)
        div.append(spanName)
        div.append(spanPoints)
        contain.append(hr)

        place = parseInt(place)
        id = parseInt(id)
        id += 1
        i++
        place += 1
    }
}

function scoreboard2(){
    let listSize = playerList.length
    let i = 0
    let place = 1
    let id = i
    while(i < listSize){
        let id = i
        // conversion string pour id 
        id = String(id)
        place = String(place)


        // Creation div classement
        let classement = document.createElement("div")
        classement.className = "classement"
        classement.id = id

        // span Numero
        let spanNumber = document.createElement("span")
        spanNumber.className = "place"
        spanNumber.classList.add("numero")
        spanNumber.innerText = place

        // span nom du joueur
        let spanName = document.createElement("span")
        spanName.className = "joueur"
        spanName.classList.add("nom")
        spanName.innerText = playerList[i].name

        // span de son nombre de points
        let spanPoints = document.createElement("span")
        spanPoints.className = "points"
        spanPoints.classList.add("puntos")
        spanPoints.innerText = playerList[i].score2 // a terme avoir une class map et prendre comme arg la map et faire map.score en fonction du player

    
        // Création de hr et ajout à la page
        let hr = document.createElement("hr")
        container = document.querySelector("div.container")
    
        container.append(contain)
        contain.append(classement)

        // Ajout de tous les span dans la div classement
        let div = document.getElementById(id)
        div.append(spanNumber)
        div.append(spanName)
        div.append(spanPoints)
        contain.append(hr)

        place = parseInt(place)
        id = parseInt(id)
        id += 1
        i++
        place += 1

    }
}

function resetContain(balise){
    balise.innerHTML =""
    console.log("ici")
}
