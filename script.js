/* Iteration 4: Make Everything Work */
// Pikachu - sky, ground, body, ears, cheeks,
var sky=document.getElementById("sky")
var bsky=document.getElementById("bsky")

bsky.oninput=() => {
    //console.log("My color input is working");
    sky.style.fill=bsky.value
};

var ground=document.getElementById("ground")
var bground=document.getElementById("bground")

bground.oninput=() => {
    //console.log("My color input is working");
    ground.style.fill=bground.value
};

var body=document.getElementById("body")
var bbody=document.getElementById("bbody")

bbody.oninput=() => {
    //console.log("My color input is working");
    body.style.fill=bbody.value
};

var ears=document.getElementById("ears")
var bears=document.getElementById("bears")

bears.oninput=() => {
    //console.log("My color input is working");
    ears.style.fill=bears.value
};

var cheeks=document.getElementById("cheeks")
var bcheeks=document.getElementById("bcheeks")

bcheeks.oninput=() => {
    //console.log("My color input is working");
    cheeks.style.fill=bcheeks.value
};