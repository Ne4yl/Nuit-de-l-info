function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function fish(){ // state : si state = 0 alors le joueur "try" si state = 1 alors le joueur "catch"    
    var fishes = document.getElementById("fishes"); // Element HTML du poisson

    // Nombre aléatoire entre 1 et 5 pour le nombre de secondes a attendre avant que le poisson vienne
    var random = Math.floor(Math.random() * 5) + 1;
        
    var x = 0; // Etat du poisson (0 = pas de poisson, 1 = poisson)
    sleep(random).then(() => {  fishes.style.color = "red"; console.log("Enable"); x = 1;}); // Etat lorsque le poisson peut etre péché
    sleep(random +0.7).then(() => {  fishes.style.color = "black"; console.log("Disable"); x = 0;}); // Etat de base (pas de poisson)
    console.log("Wait " + random + " seconds");
}

function catchFish(){
    var fishes = document.getElementById("fishes"); // Element HTML du poisson
    var state = fishes.style.color; // Etat du poisson (rouge = péchable, noir = pas péchable)

    if(state == "red"){
        console.log("Catch");
        document.getElementById("fishes").style.color = "black";
        document.getElementById("fishes").innerHTML = "Catch !!";
    }
    else {
        console.log("Miss");
        document.getElementById("fishes").innerHTML = "Miss !!";
    }

    sleep(1).then(() => {  document.getElementById("fishes").innerHTML = "Plein de poissons";});
}