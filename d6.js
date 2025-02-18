// ESERCIZIO 1
//Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro

const changeTitle = function () {
  const newTitle = document.getElementsByTagName("Title")[0];
  newTitle.innerText = "NUOVO TITOLO";
};
changeTitle();
console.log(document.title);
/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  const classTitle = document.querySelectorAll("div h1");
  classTitle[0].classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  const textP = document.querySelectorAll("div p");
  for (let i = 0; i < textP.length; i++) {
    textP[i].innerText = "STO CAMBIANDO IL TESTO DEI P NEI DIV";
  }
};
changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  const propChange = document.querySelectorAll("a");
  for (let i = 0; i < propChange.length; i++) {
    if (!propChange[i].closest("footer")) {
      propChange[i].href = "https://www.google.com";
    }
  }
};
changeUrls();

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const list = document.getElementById("secondList");
  const newEle = document.createElement("li");
  const newString = document.createTextNode(
    "questa è la quarta stringa della lista"
  );
  newEle.appendChild(newString);
  list.appendChild(newEle);
};
addToTheSecond();
/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
  const addPar = document.getElementsByTagName("div")[0];
  const newPar = document.createElement("p");
  const newText = document.createTextNode(
    "HO CREATO UN NUOVO PARAGRAFO, GODOOOO"
  );
  newPar.appendChild(newText);
  addPar.appendChild(newPar);
};
addParagraph();

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const list = document.getElementById("firstList");
  list.style.display = "none";
};
hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const ulBackground = document.querySelectorAll("ul");
  for (let i = 0; i < ulBackground.length; i++)
    ulBackground[i].style.backgroundColor = "green";
};
paintItGreen();
/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {};

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const urlReveal = document.getElementById("footer");
  const link = urlReveal.querySelector("a");
  alert(link.href);
};
revealFooterLink();
/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {};

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {};

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {};
