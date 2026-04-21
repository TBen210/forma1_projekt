
// Radio Gomb Function //
function kvizErtekel() {
    var pontszam = 0;
    const osszesKerdes = 4;

    // A válaszok lekérése a DOM-ból a rádiógombok (name attribútum) alapján
    const valasz1 = document.querySelector('input[name="q1"]:checked');
    const valasz2 = document.querySelector('input[name="q2"]:checked');
    const valasz3 = document.querySelector('input[name="q3"]:checked');
    const valasz4 = document.querySelector('input[name="q4"]:checked');

    // Ellenőrzés: mindenre érkezett-e válasz?
    if (!valasz1 || !valasz2 || !valasz3 || !valasz4) {
        const hibaDoboz = document.getElementById("eredmeny-doboz");
        hibaDoboz.innerHTML = "Légy szíves, jelölj be egy választ minden kérdésnél!";
        hibaDoboz.style.color = "orange";
        return; 
    }

    // Pontszámítás a "helyes" értékek alapján
    if (valasz1.value === "helyes") pontszam++;
    if (valasz2.value === "helyes") pontszam++;
    if (valasz3.value === "helyes") pontszam++;
    if (valasz4.value === "helyes") pontszam++;

    // Értékelő szöveg összeállítása
    let szovegesErtekeles = "";
    if (pontszam === 4) {
        szovegesErtekeles = "Hibátlan! Úgy ismered a csapatot, mint Lawrence Stroll! 🟢🏆";
    } else if (pontszam >= 2) {
        szovegesErtekeles = "Szép munka, de még kell egy kis idő a szimulátorban! 🏎️";
    } else {
        szovegesErtekeles = "Ez most olyan lett, mint az 1959-es szezon... Olvasd át újra a szöveget! 🔧";
    }

    // Eredmény kiírása a DOM-ba
    const eredmenyDoboz = document.getElementById("eredmeny-doboz");
    eredmenyDoboz.innerHTML = "Elért pontszám: " + pontszam + " / " + osszesKerdes + "<br>" + szovegesErtekeles;
    
    // Színek beállítása az eredménytől függően (az Aston Martin zöld színét is használhatjuk a hibátlanra!)
    if(pontszam === 4) eredmenyDoboz.style.color = "#00665e"; /* Aston Martin zöld */
    else eredmenyDoboz.style.color = "#e10600";
}


function kvizErtekeltext(){
    var pontszamtext = 0;
     
    var valasztext1 = document.getElementById("kerdestext1").value;


// Kis és Nagybetű elleni "védekezés"
        if("Valasztext1.toLowerCase() === "Helyes válasz helye || Valasztext1.toLowerCase() === "Ha több helye válasz akkor azt ide" ){
            pontszamtext++;

        } 

    // Eredmény kiiratása
    
    document.getElementById("eredmenytext")innerHTML = "Pontszámod:" + pontszam "/4";

    
