
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
    function kvizErtekeltext(){

         var pontszamtext = 0;
    
        // Válaszok tartalmának kinyerése
        
 var Valasztext1 = document.getElementById("kerdestext1").value;
 var Valasztext2 = document.getElementById("kerdestext2").value;
 var Valasztext3 = document.getElementById("kerdestext3").value;
 var Valasztext4 = document.getElementById("kerdestext4").value;
        
        
        // Kis és Nagybetű elleni "védekezés"
        if (Valasztext1.toLowerCase() === "ferrari" || Valasztext1.toLowerCase() === "vörös") {
         pontszamtext++;
        }
        if (Valasztext2.toLowerCase() === "ferrari" || Valasztext2.toLowerCase() === "vörös") {
         pontszamtext++;
        }
        if (Valasztext3.toLowerCase() === "ferrari" || Valasztext3.toLowerCase() === "vörös") {
         pontszamtext++;
        }
        if (Valasztext4.toLowerCase() === "ferrari" || Valasztext4.toLowerCase() === "vörös") {
         pontszamtext++;
        }
        
        //Végeredmény üzenet 
        
         if(pontszamtext === 4){
         szovegesErtekelestext = "Hibáltan! Gratulálok, tökéletesen teljesítetted a tesztet."
        } else if (pontszamtext >= 2) { 
         szovegesErtekelestext = "Szépen teljesítettél a teszten, de azért volt benne 1-2 két hiba :)."
        
         } else{
         szovegesErtekelestext = "Ez most olyan lett, mint az 1959-es szezon... Olvasd át újra a szöveget! 🔧";
     }
        
        
       // Ellenőrzés: mindenre érkezett-e válasz?
         if (!Valasztext1 || !Valasztext2 || !Valasztext3 || !Valasztext4) {
        const hibaDoboztext = document.getElementById("eredmeny-doboztext");
         hibaDoboztext.innerHTML = "Légy szíves, jelölj be egy választ minden kérdésnél!";
         hibaDoboztext.style.color = "orange";
         return; 
     }
        
         
        // Szöveges visszajelzés az eredményről
        
         document.getElementById("szoveges_visszajelzes").innerHTML = szovegesErtekelestext;
        
         // Eredmény kiiratása
        
         document.getElementById("eredmeny_helyetext").innerHTML = "Pontszámod:" + pontszamtext + "/4";
        }
    }
    
