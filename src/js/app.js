// LOGICA JUEGI

let equipo1 = {
    name: "equipo 1",
    score: 0,
    people: []
}

let equipo2 = {
    name: "equipo 2",
    score: 0,
    people: []
}

let tiempoPorRonda = 60

let historialPalabras = [] 
let palabrasEnJuego = []
let palabrasYaSacadas = []
let equipoActivo = equipo1


// variables DOM

let burgerMenu = document.getElementById("burguer-menu")
let homeMenu = document.getElementById("home-menu")

let modalMenu = document.getElementById("modal-menu")
let newGameBtn = document.getElementById("newGameBtn")
let teamsBtn = document.getElementById("teamsBtn")
let changeNameTeam1Btn = document.getElementById("changeNameTeam1Btn")
let changeNameTeam2Btn = document.getElementById("changeNameTeam2Btn")
let devolverPapelBtn = document.getElementById("devolverPapelBtn")
let sacarPapelBtn = document.getElementById("sacarPapelBtn")
let nuevoPapelBtn = document.getElementById("nuevoPapelBtn")
let nuevaRondaBtn = document.getElementById("nuevaRondaBtn")

    // SCREENS
let nuevoJuegoScreen = document.getElementById("nuevoJuegoScreen")
let homeScreen = document.getElementById("start-screen")
let teamsScreen = document.getElementById("teamsScreen")
let nuevaRondaScreen = document.getElementById("nuevaRondaScreen")

// DOM FUNCTION

function hiddenAllScreens(){

    // Seleccionar todos los divs con la clase ".screen"
    const screens = document.querySelectorAll('.screen');

    // Recorrer los elementos y agregar la clase "hidden"
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });

}

// DOM EVENTS


burgerMenu.addEventListener("click",
() => modalMenu.classList.toggle("hidden")
)

homeMenu.addEventListener("click", 
()=> {
    hiddenAllScreens()
    homeScreen.classList.remove("hidden")
})

newGameBtn.addEventListener("click",
() => {
    hiddenAllScreens()
    nuevoJuegoScreen.classList.remove("hidden")   
})

teamsBtn.addEventListener("click",
() => {
    hiddenAllScreens()
    teamsScreen.classList.remove("hidden")   
})

changeNameTeam1Btn.addEventListener("click",
()=> changeTeams1Name() )

changeNameTeam2Btn.addEventListener("click",
()=> changeTeams2Name() )

nuevoPapelBtn.addEventListener("click", () => agregarPapel() )

nuevaRondaBtn.addEventListener("click",
() => {
    hiddenAllScreens();
    nuevaRondaScreen.classList.remove("hidden")
})

sacarPapelBtn.addEventListener("click", () => sacarPapel() )



// GAME FUNCTIONS

function renderTextByClassName(className,text){
    let list = document.querySelectorAll(className)
    list.forEach(
        node => node.textContent = text
    )
}

function changeTeams1Name(){
    let newName = prompt("Nuevo Nombre") 
    let team1NameTags = document.querySelectorAll(".equipo1name")
    if( newName != null){
        equipo1.name= newName;
        
        team1NameTags.forEach( 
            tag => tag.textContent = newName
        )    
    }
}

function changeTeams2Name(){
    let newName = prompt("Nuevo Nombre") 
    let team2NameTags = document.querySelectorAll(".equipo2name")
    if( newName != null){
        equipo2.name= newName;
        
        team2NameTags.forEach( 
            tag => tag.textContent = newName
        )    
    }
}


function agregarPapel(){
    let newPapel = prompt("papelito:")
    if(newPapel != null){
        palabrasEnJuego.push(newPapel)
        console.log(palabrasEnJuego)
        renderTextByClassName(".papelesCount",palabrasEnJuego.length)
    }
}

function revolverBolsa(){
    palabrasEnJuego.sort( () => Math.random() - 0.5  );
}

function sacarPapel(){
    if(palabrasEnJuego.length===0){
        alert("Olla Vacia!!!!!!!!!!!!!!")
    }
    else{
        revolverBolsa()
        let papel = palabrasEnJuego.pop()
        renderTextByClassName(".mostradorPalabra",papel)
        palabrasYaSacadas.push( papel )
        console.log("fuera" + palabrasYaSacadas)
        console.log("en olla"+ palabrasEnJuego)
    
    }

}

