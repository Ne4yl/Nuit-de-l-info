function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function fish(){ // Fonction qui fait apparaitre le poisson

    var fishes = document.getElementById("fishes"); // Element HTML du poisson
    fishes.innerHTML = "Plein de poissons"; // Texte du poisson

    // Nombre aléatoire entre 1 et 5 pour le nombre de secondes a attendre avant que le poisson vienne
    var random = Math.floor(Math.random() * 5) + 1;
    
    // Design : le poisson apparait et donc le joueur peut pécher ! 
    sleep(random).then(() => {  fishes.style.color = "red"; console.log("Enable"); miss(0);}); // Etat lorsque le poisson peut etre péché
    sleep(random +0.7).then(() => {  fishes.style.color = "black"; console.log("Disable");}); // Etat de base (pas de poisson)
    console.log("Wait " + random + " seconds");
}

var count = 0; // Nombre de poissons péchés

function miss(forgetFish){ // Fonction qui gère les miss
    var state = document.getElementById("fishes").style.color;
    if (state == "red"){
        forgetFish = 1;
        sleep(0.1).then(() => { 
            miss(1);
        });
    }

    if (state == "black" && forgetFish == 1){
        // Design : le joueur loupe un poisson donc mettre un effet visuel sur le poisson !!
        document.getElementById("fishes").innerHTML = "Miss !";
        console.log("Miss");
        sleep(1).then(() => { 
            fish();
        });
    }
}

function catchFish(){ // Fonction qui gère les catch

    var fishes = document.getElementById("fishes"); // Element HTML du poisson
    var state = fishes.style.color; // Etat du poisson (rouge = péchable, noir = pas péchable)

    if(state == "red"){
        // Le poisson est attrapé le joeur gagne un point !
        // Design : le joueur gagne un point donc mettre un effet visuel sur le poisson !!
        console.log("Catch");
        document.getElementById("fishes").style.color = "Blue";
        document.getElementById("fishes").innerHTML = "Catch !!";
        count += 1;

        // Alert the user
        alert("Vous avez attrapé " + count + " poissons !");

        // Break the loop
        return;
    }
    sleep(1).then(() => {  document.getElementById("fishes").innerHTML = "Plein de poissons";});
}