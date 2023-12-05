
// Funksjon som blir kjørt når vinduet er ferdig lastet
window.onload = function() {
    let startTime; // Variabel for starttidspunktet
    let endTime; // Variabel for sluttidspunktet
    let isClickable = false; // Variabel som indikerer om klikk er mulig
    let readyButton = document.getElementById('readyButton'); 
    let resetButton = document.getElementById('resetButton'); 
    let clickBox = document.getElementById('clickBox'); 

   
    readyButton.addEventListener('click', function() {
        isClickable = true; // Setter klikk til å være mulig
        setTimeout(makeGreen, Math.random() * 5000); // Setter ein tilfeldig forsinkelse før boksen blir grønn
    });

   
    resetButton.addEventListener('click', function() {
        clickBox.style.backgroundColor = 'red'; // Setter bakgrunnsfargen til rød
        document.getElementById('Reaksjonstid').innerHTML = ""; 
    });

    
    clickBox.addEventListener('click', function() {
        if (this.style.backgroundColor == 'green' && isClickable) {
            endTime = new Date(); 
            let reactionTime = (endTime - startTime) / 1000; // Beregner reaksjonstiden
            document.getElementById('reactionTime').innerHTML = "Din reaksjonstid er: " + reactionTime + " sekunder"; // Oppdaterer reaksjonstid-elementet
            this.style.backgroundColor = 'red'; // Setter bakgrunnsfargen til rød
            readyButton.disabled = false; // Aktiverer klar-knappen
            isClickable = false; // Setter klikk til å være umulig
        }
    });

    // Funksjon som setter bakgrunnsfargen til grønn og lagrer starttidspunktet
    function makeGreen() {
        clickBox.style.backgroundColor = 'green'; // Setter bakgrunnsfargen til grønn
        startTime = new Date(); // Setter starttidspunktet
    }

    // Legger til en hendelseslytter for klikk på tilbakestill-knappen
    resetButton.addEventListener('click', function() {
        clickBox.style.backgroundColor = 'red'; // Setter bakgrunnsfargen til rød
        document.getElementById('reactionTime').innerHTML = ""; // Tømmer reaksjonstid-elementet
        readyButton.disabled = false; // Aktiverer klar-knappen
    });


}