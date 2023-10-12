# SSL-Verschlüsselt-Badge
Java Script Code der ein kleines Badge in der rechten unteren Ecke erstellt, welches "SSL-Verschlüsselt" anzeigt.
<br>
Bilder:
<br>
<img src="https://github.com/dmd2222/SSL-Verschl-sselt-Badge/blob/main/images/1.JPG?raw=true" alt="Bild 1">
<img src="https://github.com/dmd2222/SSL-Verschl-sselt-Badge/blob/main/images/2.JPG?raw=true" alt="Bild 2">
<img src="https://github.com/dmd2222/SSL-Verschl-sselt-Badge/blob/main/images/3.JPG?raw=true" alt="Bild 3">
JavaScript Code:
<code>
<script>
  // Überprüft, ob die Seite über HTTPS geladen wurde
  if (window.location.protocol === 'https:') {
    // Erstellen eines Elements für das Schlosssymbol
    var lockIcon = document.createElement('div');
    lockIcon.innerHTML = '🔒 SSL-Verschlüsselt';

    // Stilisieren des Symbols
    lockIcon.style.position = 'fixed';
    lockIcon.style.bottom = '10px';
    lockIcon.style.right = '10px';
    lockIcon.style.backgroundColor = 'green';
    lockIcon.style.color = 'white';
    lockIcon.style.padding = '5px';
    lockIcon.style.borderRadius = '3px';
    lockIcon.style.zIndex = '9999';

    // Fügt das Symbol zur Webseite hinzu
    document.body.appendChild(lockIcon);
  }
</script>
</code>
