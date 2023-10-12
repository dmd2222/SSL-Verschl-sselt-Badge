<script>
  // Überprüft, ob die Seite über HTTPS geladen wurde
  if (window.location.protocol === 'https:') {
    // Erstellen eines Elements für das Schlosssymbol
    var lockIcon = document.createElement('div');
    lockIcon.innerHTML = '<a href="https://github.com/dmd2222/SSL-Verschl-sselt-Badge" style="color: white; text-decoration: none;">🔒 SSL-Verschlüsselt</a>';

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
