
document.addEventListener('DOMContentLoaded', function()  {
console.log("dom loaded");
    function main() {
    function showIceCream(t) {
        setTimeout(function(){ 
           let div = document.createElement("div");
           div.className= "ice-cream";
           div.innerHTML = "My Favorite Ice Cream Flavor is Rocky Road!";
           document.body.appendChild(div);

         }, t);

    }
    function promptUser(var1) {
        const time = Number(prompt("Type a number", "20"));
        showIceCream(time*1000);
    }

    promptUser(showIceCream);
}
    main();
    
});
