// ============ CLASS Stage ============

class Stage {
    constructor(name){
        this.name = name
        this.leaderboard = new Map()

    }

    addPlayer(name, score){
        this.leaderboard.set(name, score)
    }
}


// ============ CREATE STAGE ============

let stage1 = new Stage("stage 1")
stage1.addPlayer("Louisan", 10000),
stage1.addPlayer("Benjos", 200),
stage1.addPlayer("Djédjé", 9000),
stage1.addPlayer("Julien", 13000),
stage1.addPlayer("Alexis", 7000)


let stage2 = new Stage("stage 2")
stage2.addPlayer("Louisan", 788),
stage2.addPlayer("Benjos", 07654),
stage2.addPlayer("Djédjé", 4579),
stage2.addPlayer("Julien", 2649),
stage2.addPlayer("Alexis", 222222)

let stage3 = new Stage("stage 3")
stage3.addPlayer("Louisan", 8678),
stage3.addPlayer("Benjos", 647),
stage3.addPlayer("Djédjé", 2974),
stage3.addPlayer("Julien", 1334),
stage3.addPlayer("Alexis", 11111)

let stage4 = new Stage("stage 4")
stage4.addPlayer("Louisan", 4522),
stage4.addPlayer("Benjos", 23333),
stage4.addPlayer("Djédjé", 97000),
stage4.addPlayer("Julien", 87655),
stage4.addPlayer("Alexis", 00000)

// let map3 = new Stage("MAP 3")
// let map4 = new Stage("MAP 4")
// let map5 = new Stage("MAP 5")



// ============ PRINT SCOREBOARD ============

function scoreboard2(stage){
    // Map to array
    let stageArray = Array.from(stage.leaderboard)
    
    // Sort player most point to less
    stageArray.sort((a, b) => {
    return a[1] - b[1]
    })
    stageArray.reverse()

    // variable for iteration
    let listSize = stageArray.length
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
        spanName.innerText = stageArray[i][0]

        // span de son nombre de points
        let spanPoints = document.createElement("span")
        spanPoints.className = "points"
        spanPoints.classList.add("puntos")
        spanPoints.innerText = stageArray[i][1]

        // Création de hr et ajout à la page
        let hr = document.createElement("hr")
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
}

// ============ AFFICHER BOUTON MAP AND USE THEM ============

let contain = document.querySelector("div.contain")
stageList = [stage1, stage2, stage3, stage4]
let i = 1000
let btnList = []

for(let stage of stageList){

    let id = i
    // id to string
    id = String(id)

    // Create button
    let btn = document.createElement("button")
    // Set ID
    btn.id = id 
    // Set Text
    btn.innerText = stage.name
    // Set class 
    btn.className = ("btn")
    // Add button to HTML
    divBouton = document.querySelector("div.button")
    divBouton.append(btn)

    let printScoreboard = document.getElementById(id)
    printScoreboard.addEventListener('click', () =>{
        // reset content
        resetContain(contain)    
        // Print scoreboard
        scoreboard2(stage)
    })
 
    // Sélection de tous les boutons
    const buttons = document.querySelectorAll('.btn');

    // Ajout d'un gestionnaire d'événement à chaque bouton
    buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Suppression de la classe 'active' pour tous les boutons
        buttons.forEach(button => {
        button.classList.remove('background')
        button.classList.remove('textColor')
        });
        // Ajout de la classe 'active' pour le bouton sélectionné
        button.classList.add('background')
        button.classList.add('textColor')

        })
    })

  // ============ AFFICHER JOUEUR SCOREBOARD ============

    id = parseInt(id)
    i--
}
