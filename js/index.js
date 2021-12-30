
var ergebnis

function meterinKilometer() {
    let  anzahlMeter = parseInt(document.getElementById("meter").value);
    console.log(anzahlMeter);
    ergebnis = anzahlMeter / 1000;
    console.log(ergebnis);
    document.getElementById("TabelleKilometer").innerHTML = ergebnis;
    return ergebnis
}

function kilometerInMeilen() {
    let anzahlKilometer = ergebnis
    let ergebnis2 = anzahlKilometer / parseFloat(1.609) ;
    console.log("anzK ist" + anzahlKilometer)
    document.getElementById("TabelleMeilen").innerHTML = ergebnis2;
    console.log("erg2 ist" + ergebnis2);
    return ergebnis2;
}

function kilometerInYards() {
    let anzahlKilometer = ergebnis
    let ergebnis3 = anzahlKilometer * 1094;
    console.log("anzK ist" + anzahlKilometer)
    document.getElementById("TabelleYards").innerHTML = ergebnis3;
    console.log("erg2 ist" + ergebnis3);
    return ergebnis3;
}
function kilometerInFuß() {
    let anzahlKilometer = ergebnis
    let ergebnis4 = anzahlKilometer * 3281;
    console.log("anzK ist" + anzahlKilometer)
    document.getElementById("TabelleFuß").innerHTML = ergebnis4;
    console.log("erg2 ist" + ergebnis4);
    return ergebnis4;}
function gesamteRechnung() {
    Überprüfe();
    meterinKilometer();
    kilometerInMeilen();
    kilometerInYards();
    kilometerInFuß()
}
function Überprüfe() {
    let  anzahlMeter = parseInt(document.getElementById("meter").value);
    if (isNaN(anzahlMeter)) {
        alert("Überprüfe deine Eingabe, du hast keine Zahl eingegeben.");
        return anzahlMeter

    }
}

function hide_elements()
{
    var elementNames = hide_elements.arguments;
    for (var i=0; i<elementNames.length; i++)
    {
        var elementName = elementNames[i];
        document.getElementById(elementName).style.display='none';
    }
}

