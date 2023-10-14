//""window.onload executes the followed function everytime the broser reloads. 
window.onload = function excuse() {
// Arrays
    let who = ['El perro ', 'Mi abuela ', 'Su tortuga ', 'Mi pajaro '];
    let action = ['Comió ', 'orinó ', 'aplastó ', 'rompió '];
    let what = ['Mi tarea ', 'las llaves ', 'el carro '];
    let when = ['Antes de clase.', 'justo a tiempo.', 'cuando terminé.', 'almorzando.', 'cuando rezaba.'];
// Declaring a new variable (randomWho,randomAction, etc..) 
// Creating random position in the Array using math.floor to round a number and 
// math.random to generate a random number within the array's length (in this order)
    let randomWho = Math.floor(Math.random()*who.length);
    let randomAction = Math.floor(Math.random()* action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random()* when.length);
//Mergin all random generated items into one variable
    var excuse = who[randomWho] + action[randomAction] + what [randomWhat] + when [randomWhen];
//Sync this fuction to the html file
    var myexcuse = document.getElementById("myexcuse");
    myexcuse.innerHTML = excuse;
};
