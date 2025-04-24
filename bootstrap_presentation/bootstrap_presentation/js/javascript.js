// =====================
// Navigation: Aktiver Link hervorheben
// =====================

// Diese Funktion wird ausgeführt, sobald der gesamte HTML-Inhalt geladen ist
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop(); // Holt den Dateinamen aus der URL
    const navLinks = document.querySelectorAll(".nav-link"); // Alle Navigationslinks werden ausgewählt
  
    // Überprüft jeden Link in der Navigation
    // und fügt die Klasse "active" hinzu, wenn der Link mit dem aktuellen Pfad übereinstimmt
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  
  
  // =====================
  // Beispiel 1: Button-Vorschau
  // =====================
  
  // Diese Funktion wird ausgeführt, sobald der HTML-Inhalt geladen ist
  document.addEventListener("DOMContentLoaded", () => {
    const previewBtn = document.getElementById("preview-btn"); // Der Button, der als Vorschau angezeigt wird
    const textInput = document.getElementById("btn-text"); // Eingabefeld für den Button-Text
    const colorSelect = document.getElementById("btn-color"); // Dropdown-Menü für die Button-Farbe
    const updateBtn = document.getElementById("update-btn"); // Button zum Anwenden der Änderungen
    const htmlOutput = document.getElementById("html-output"); // Textfeld zur Anzeige des HTML-Codes
  
    // Überprüft, ob alle Elemente vorhanden sind, bevor etwas gemacht wird
    if (previewBtn && textInput && colorSelect && updateBtn && htmlOutput) {
      // Diese Funktion aktualisiert den Vorschau-Button und den HTML-Code darunter
      function updateButton() {
        const newText = textInput.value || "Vorschau Button"; // Standardtext, falls kein Text eingegeben wurde
        const newColor = colorSelect.value; // Holt die ausgewählte Farbe aus dem Dropdown
  
        previewBtn.className = `btn btn-${newColor}`; // Setzt die neue Bootstrap-Klasse (z. B. btn-primary)
        previewBtn.textContent = newText; // Aktualisiert den Text im Button
  
        // Zeigt den aktuellen HTML-Code des Buttons im Textfeld an
        htmlOutput.value = `<button class="btn btn-${newColor}">${newText}</button>`;
      }
  
      updateBtn.addEventListener("click", updateButton); // Klick auf „Aktualisieren“ löst die Funktion aus
      updateButton(); // Ruft die Funktion direkt beim Laden der Seite auf
    }
  });
  
  
  // =====================
  // Beispiel 2: Alert-Vorschau
  // =====================
  
  // Diese Funktion wird ebenfalls beim Laden der Seite ausgeführt
  document.addEventListener("DOMContentLoaded", () => {
    const alertPreview = document.getElementById("preview-alert"); // Vorschau-Feld für den Alert
    const alertTextInput = document.getElementById("alert-text"); // Eingabefeld für den Text im Alert
    const alertColorSelect = document.getElementById("alert-color"); // Dropdown für die Alert-Farbe
    const alertUpdateBtn = document.getElementById("update-alert-btn"); // Button zum Aktualisieren des Alerts
    const alertHtmlOutput = document.getElementById("alert-html-output"); // Textarea zur Anzeige des generierten Codes
  
    // Nur ausführen, wenn alle benötigten Elemente vorhanden sind
    if (alertPreview && alertTextInput && alertColorSelect && alertUpdateBtn && alertHtmlOutput) {
      // Diese Funktion aktualisiert den Alert und zeigt den HTML-Code dazu an
      function updateAlert() {
        const text = alertTextInput.value || "Dies ist ein Hinweis!"; // Standardtext für den Alert
        const color = alertColorSelect.value; // Ausgewählte Farbe wird übernommen
  
        alertPreview.className = `alert alert-${color}`; // Setzt die entsprechende Bootstrap-Klasse
        alertPreview.textContent = text; // Setzt den Text im Alert
  
        // Zeigt den passenden HTML-Code in der Textarea an
        alertHtmlOutput.value = `<div class="alert alert-${color}" role="alert">${text}</div>`;
      }
  
      alertUpdateBtn.addEventListener("click", updateAlert); // Klick auf „Aktualisieren“ führt die Funktion aus
      updateAlert(); // Führt die Funktion direkt beim Laden aus
    }
  });

  // =====================
// Beispiel 3: Grid-System Vorschau
// =====================

document.addEventListener("DOMContentLoaded", () => {
  const gridPreview = document.getElementById("preview-grid"); // Vorschau-Bereich für das Grid
  const gridRowsInput = document.getElementById("grid-rows"); // Eingabefeld für die Anzahl der Zeilen
  const gridColumnsInput = document.getElementById("grid-columns"); // Eingabefeld für die Anzahl der Spalten
  const gridWidthInput = document.getElementById("grid-width"); // Eingabefeld für die Breite der Spalten
  const updateGridBtn = document.getElementById("update-grid-btn"); // Button zum Aktualisieren des Grids
  const gridHtmlOutput = document.getElementById("grid-html-output"); // Textarea zur Anzeige des generierten HTML-Codes

  // Funktion zum Generieren des Grids
  function updateGrid() {
    const rows = Math.min(Math.max(parseInt(gridRowsInput.value) || 1, 1), 10); // Anzahl der Zeilen (1–10)
    const columns = Math.min(Math.max(parseInt(gridColumnsInput.value) || 1, 1), 12); // Anzahl der Spalten (1–12)
    const width = Math.min(Math.max(parseInt(gridWidthInput.value) || 12, 1), 12); // Breite der Spalten (1–12)

    // Vorschau und HTML-Code zurücksetzen
    gridPreview.innerHTML = "";
    let gridHtml = "";

    // Grid generieren
    for (let r = 1; r <= rows; r++) {
      const rowHtml = document.createElement("div");
      rowHtml.className = "row mb-3"; // Bootstrap-Klasse für Zeilen
      gridHtml += `<div class="row">\n`;

      for (let c = 1; c <= columns; c++) {
        const colHtml = document.createElement("div");
        colHtml.className = `col-${width} bg-primary text-white text-center p-2`;
        colHtml.textContent = `Zeile ${r}, Spalte ${c}`;
        rowHtml.appendChild(colHtml);

        gridHtml += `  <div class="col-${width} bg-primary text-white text-center p-2">Zeile ${r}, Spalte ${c}</div>\n`;
      }

      gridPreview.appendChild(rowHtml);
      gridHtml += `</div>\n`;
    }

    // HTML-Code in die Textarea schreiben
    gridHtmlOutput.value = gridHtml;
  }

  // Event-Listener für den Aktualisieren-Button
  updateGridBtn.addEventListener("click", updateGrid);

  // Initiales Grid generieren
  updateGrid();
});