function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s));
}

// Get the div element
var myDiv = document.getElementById('player');
var myDiv2 = document.getElementById('sol');

// Get the position of the div
var rect = myDiv.getBoundingClientRect();

const player_default = {
    x: rect.left,
    y : rect.top,
    largeur : rect.width,
    hauteur : rect.height,
}

var player = {
    x: rect.left,
    y : rect.top,
}

// Projectile
const projectile = {
    speed : 30,
    x : player.x + player.largeur,
    y : player.y/2 + player.hauteur/2,
    // hauteur : 50,
    // largeur : 82,
}

function attaque(){
    x = 0;
    console.log('Attaque!');
    console.log((player.x + player_default.largeur));
    const projectileDiv = document.createElement('img');
    projectileDiv.src = 'projectile.png';
    projectileDiv.className = 'projectile';
    projectileDiv.style.left = (player.x + player_default.largeur) + 'px';
    projectileDiv.style.top = 400 + 'px';
    projectileDiv.style.width = 100 + 'px';
    projectileDiv.style.height = 164 + 'px';
    projectileDiv.style.height = projectile.largeur + 'px';
    projectileDiv.style.width = projectile.hauteur + 'px';
    document.querySelector('.bullet').appendChild(projectileDiv);
    sleep(1000).then(() => {
        document.querySelector('.projectile').remove();
    });
}

function attaque_enemy(){
    x = 0;
    console.log('Attaque Enemy !');
    console.log((player.x + player_default.largeur));
    const projectileDiv = document.createElement('img');
    projectileDiv.src = 'fusee.png';
    projectileDiv.className = 'projectile';
    projectileDiv.style.left = (enemy.x + player_default.largeur) + 'px';
    projectileDiv.style.top = 400 + 'px';
    projectileDiv.style.width = 100 + 'px';
    projectileDiv.style.height = 164 + 'px';
    projectileDiv.style.height = projectile.largeur + 'px';
    projectileDiv.style.width = projectile.hauteur + 'px';
    document.querySelector('.bullet').appendChild(projectileDiv);
    sleep(1000).then(() => {
        document.querySelector('.projectile').remove();
    });
}

// Display the position
// console.log('Y : ' + player.y);
// console.log('X : ' + player.x);
// console.log('Largeur : ' + player.largeur);
// console.log('hauteur : ' + player.hauteur);

addEventListener("keydown", function (e) {
    if (e.code === 'KeyW') {
        // Space
        if (player.y < player_default.y + 150){
            player.y = player.y - 150;
            myDiv.style.top = (player.y) + 'px';
            console.log('Top: ' + myDiv.style.top);
            sleep(300).then(() => {
                player.y = player_default.y;
                myDiv.style.top = (player.y) + 'px';
            });
        }
    }
    
    if (e.code === 'KeyA') {
        if (player.x > 0){
        // Left
        player.x = player.x - 128.6666;
        myDiv.style.left = (player.x) + 'px';
        console.log("Left : " + player.x + "px");
        }
    }

    if (e.code === 'KeyD') {
        if (player.x < 1136){
            // Right
            player.x = player.x + 128.6666;
            myDiv.style.left = (player.x) + 'px';
            console.log("Left : " + player.x + "px");
        }
    }

    if (e.code === 'Space') {
        // Right
        console.log('Space');
        attaque();
    }
});


// Enemy 
var enemyDiv = document.getElementById('enemy');

const enemy_default = {
    x: rect.right,
    y: rect.top,
    largeur : rect.width,
    hauteur : rect.height,
}

var enemy = {
    x: enemy_default.x,
    y: enemy_default.y,
}

var enemySpeed = 128.6666; // Ajuste la vitesse de l'ennemi selon tes besoins

function updateEnemyPosition() {
    // Déplacement de l'ennemi vers le joueur (simplement en suivant l'axe X dans cet exemple)
    console.log('enemy.x : ' + enemy.x);
    if (enemy.x < player.x) {
        enemy.x += enemySpeed;
    } 
    if (enemy.x > player.x){
            enemy.x -= enemySpeed;
    }
    sleep(1000).then(() => {attaque_enemy();});
    
    console.log('enemy.x : ' + enemy.x);


    // Met à jour la position de l'ennemi dans le DOM
    enemyDiv.style.left = enemy.x + 'px';
    enemyDiv.style.top = enemy.y + 'px';

    // Vérifie si l'ennemi touche le joueur
    if (
        enemy.x < player.x + player.width &&
        enemy.x + enemy.width > player.x &&
        enemy.y < player.y + player.height &&
        enemy.y + enemy.height > player.y
    ) {
        // Le joueur est touché, tu peux ajouter ici le code correspondant à ce scénario
        console.log('Le joueur est touché!');
    }
}

// Appelle la fonction de mise à jour de la position de l'ennemi à intervalles réguliers
setInterval(updateEnemyPosition, 500);