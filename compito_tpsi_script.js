// Funzione per cercare gli orari dei bus in base al numero della fermata
function cercaOrari() {
    const fermataInput = document.getElementById("fermata").value.trim(); // Ottieni il valore dell'input
    if (!fermataInput) {
      alert("Per favore, inserisci un numero di fermata valido.");
      return;
    }
  
    // Costruisci l'URL dell'API con il numero della fermata
    const url = `https://gpa.madbob.org/query.php?stop=${fermataInput}`;
  
    // Fai una richiesta all'API
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta all'API.");
        }
        return response.json(); // Ottieni la risposta in formato JSON
      })
      .then(data => {
        if (data && data.passaggi && data.passaggi.length > 0) {
          // Mostra gli orari se i dati sono validi
          mostraOrari(data.passaggi);
        } else {
          // Se non ci sono dati per quella fermata
          document.getElementById("risultati").innerHTML = `
            <h3 class="text-danger">Nessun orario trovato per la fermata ${fermataInput}.</h3>
          `;
        }
      })
      .catch(error => {
        // Gestisci errori durante la richiesta
        console.error("Errore:", error);
        document.getElementById("risultati").innerHTML = `
          <h3 class="text-danger">Si è verificato un errore. Riprova più tardi.</h3>
        `;
      });
  }
  
  // Funzione per mostrare gli orari
  function mostraOrari(passaggi) {
    const risultatiDiv = document.getElementById("risultati");
    risultatiDiv.innerHTML = `<h3>Orari per la fermata:</h3>`;
    
    const ul = document.createElement("ul");
    ul.classList.add("list-group");
  
    // Crea una lista con gli orari
    passaggi.forEach(passaggio => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = `Linea ${passaggio.linea}: ${passaggio.orario}`;
      ul.appendChild(li);
    });
  
    risultatiDiv.appendChild(ul);
  }