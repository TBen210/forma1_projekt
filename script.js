// Radio Gomb Function //
// A Kvíz a csapat.html oldalon található //

function kvizErtekel() {

    var pontszam = 0;
    var osszesKerdes = 4;
    var eredmenyDoboz = document.getElementById("eredmeny-doboz");
    
    var q1_kitoltve = document.getElementById("valasz1a").checked || document.getElementById("valasz1b").checked || document.getElementById("valasz1c").checked;
    
    var q2_kitoltve = document.getElementById("valasz2a").checked || document.getElementById("valasz2b").checked || document.getElementById("valasz2c").checked;
    
    var q3_kitoltve = document.getElementById("valasz3a").checked || document.getElementById("valasz3b").checked || document.getElementById("valasz3c").checked;
    
    var q4_kitoltve = document.getElementById("valasz4a").checked || document.getElementById("valasz4b").checked || document.getElementById("valasz4c").checked;

    // Minden kérdésre jött válasz? (Ellenőrzés)
    if (!q1_kitoltve || !q2_kitoltve || !q3_kitoltve || !q4_kitoltve) {
        eredmenyDoboz.innerHTML = "Légy szíves, jelölj be egy választ minden kérdésnél!";
        eredmenyDoboz.style.color = "orange";
        return; 
    }



// 1. kérdés 
if (document.getElementById("valasz1b").checked) {
    pontszam++; 
}

// 2. kérdés 
if (document.getElementById("valasz2c").checked) {
    pontszam++; 
}

// 3. kérdés 
if (document.getElementById("valasz3b").checked) {
    pontszam++; 
}

// 4. kérdés 
if (document.getElementById("valasz4a").checked) {
    pontszam++; 
}

    // Értékelő szöveg összeállítása
    var szovegesErtekeles = "";
    if (pontszam === 4) {
        szovegesErtekeles = "Hibátlan! Úgy ismered a csapatot, mint Lawrence Stroll! 🟢🏆";
    } else if (pontszam >= 2) {
        szovegesErtekeles = "Szép munka, de még kell egy kis idő a szimulátorban! 🏎️";
    } else {
        szovegesErtekeles = "Ez most olyan lett, mint az 1959-es szezon... Olvasd át újra a szöveget! 🔧";
    }

    // 4. LÉPÉS: Az eredmény kiírása a HTML-be
    eredmenyDoboz.innerHTML = "Elért pontszám: " + pontszam + " / " + osszesKerdes + "<br>" + szovegesErtekeles;
    
    
    if (pontszam === 4) {
        eredmenyDoboz.style.color = "#00665e"; 
    } else {
        eredmenyDoboz.style.color = "#e10600"; 
    }
}





// A pilota.html oldalon található kvíz függvénye //
function kvizErtekeltext(){

         var pontszamtext = 0;
    
        // Válaszok tartalmának kinyerése
        
 var Valasztext1 = document.getElementById("kerdestext1").value;
 var Valasztext2 = document.getElementById("kerdestext2").value;
 var Valasztext3 = document.getElementById("kerdestext3").value;
 var Valasztext4 = document.getElementById("kerdestext4").value;
        
        
        // Kis és Nagybetű elleni "védekezés"
        if (Valasztext1.toLowerCase() === "juan manuel fangio" ) {
         pontszamtext++;
        }
        if (Valasztext2.toLowerCase() === "silverstone" || Valasztext2.toLowerCase() ===  "silverstone circuit" ) {
         pontszamtext++;
        }
        if (Valasztext3.toLowerCase() === "1400" ) {
         pontszamtext++;
        }
        if (Valasztext4.toLowerCase() === "mercedes") {
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





// Az auto.html oldalon található kvíz függvénye //
function kvizErtekeltextb(){

         var pontszamtext = 0;
    
        // Válaszok tartalmának kinyerése
        
 var Valasztext1b = document.getElementById("kerdestext1b").value;
 var Valasztext2b = document.getElementById("kerdestext2b").value;
 var Valasztext3b = document.getElementById("kerdestext3b").value;
 var Valasztext4b = document.getElementById("kerdestext4b").value;
        
        
        // Kis és Nagybetű elleni "védekezés"
        if (Valasztext1b.toLowerCase() === "hans rendszer" ) {
         pontszamtext++;
        }
        if (Valasztext2b.toLowerCase() === "2010" || Valasztext2b.toLowerCase() ===  "silverstone circuit" ) {
         pontszamtext++;
        }
        if (Valasztext3b === "farina" || Valasztext3b === "nino farina" || Valasztext3b === "giuseppe farina") pontszam++;
       
        if (Valasztext4b.toLowerCase() === "költségplafont") {
         pontszamtext++;
        }


        
          // Ellenőrzés: mindenre érkezett-e válasz?
         if (!Valasztext1b || !Valasztext2b || !Valasztext3b || !Valasztext4b) {
        const hibaDoboztext = document.getElementById("eredmeny-doboztext");
         hibaDoboztext.innerHTML = "Légy szíves, jelölj be egy választ minden kérdésnél!";
         hibaDoboztext.style.color = "orange";
         return; 
     }
        
        //Végeredmény üzenet 
        
         if(pontszamtext === 4){
         szovegesErtekelestext = "Hibáltan! Gratulálok, tökéletesen teljesítetted a tesztet."
        } else if (pontszamtext >= 2) { 
         szovegesErtekelestext = "Szépen teljesítettél a teszten, de azért volt benne 1-2 két hiba :)."
        
         } else{
         szovegesErtekelestext = "Ez most olyan lett, mint az 1959-es szezon... Olvasd át újra a szöveget! 🔧";
     }
        
        
     
        
         
        // Szöveges visszajelzés az eredményről
        
         document.getElementById("szoveges_visszajelzes").innerHTML = szovegesErtekelestext;
        
         // Eredmény kiiratása
        
         document.getElementById("eredmeny_helyetext").innerHTML = "Pontszámod:" + pontszamtext + "/4";
}