# SSL-Verschlüsselt-Badge
Java Script Code der ein kleines Badge in der rechten unteren Ecke erstellt, welches "SSL-Verschlüsselt" anzeigt.
Bilder:

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
