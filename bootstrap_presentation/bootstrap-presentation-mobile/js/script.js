// JavaScript für die Bootstrap-Präsentation
    document.getElementById('updateButton').addEventListener('click', function () {
        // Button-Text aktualisieren
        const buttonText = document.getElementById('buttonText').value;
        const previewButton = document.getElementById('previewButton');
        if (buttonText) {
            previewButton.textContent = buttonText;
        }

        // Button-Farbe aktualisieren
        const buttonColor = document.getElementById('buttonColor').value;
        previewButton.className = `btn ${buttonColor}`;

        // HTML-Code des Buttons anzeigen
        const buttonCode = document.getElementById('buttonCode');
        buttonCode.value = previewButton.outerHTML;
    });
