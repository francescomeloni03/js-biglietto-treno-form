const bottone = document.getElementById("calcola");
const annulla = document.getElementById("reset");

bottone.addEventListener("click", function(){

    const prezzoPerKm = 0.21;
    let nome = document.getElementById("name").value;
    let distanza = parseInt( document.getElementById("km").value );
    let prezzo = 0;

    prezzo = distanza * prezzoPerKm;
    let eta = document.getElementById("eta").value;
    let offerta = "Biglietto Standard";

    if( eta=="minorenne" ) {
        offerta = "Biglietto Junior";
        prezzo = prezzo * 0.8;
    } else if ( eta=="senior") {
        offerta = "Biglietto Senior";
        prezzo = prezzo * 0.6;
    }
    prezzo = prezzo.toFixed(2);

    document.getElementById("bigliettoPasseggero").innerText = nome;
    document.getElementById("bigliettoOfferta").innerText = offerta;
    document.getElementById("bigliettoCosto").innerText = prezzo;

} );

annulla.addEventListener("click", function() {
    
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";

});


