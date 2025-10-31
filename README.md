# Hello World Demo

A minimal HTML/CSS/JS demo created in the workspace root.

Files created:

- `index.html` — main page
- `styles.css` — styles for the page
- `script.js` — small JS interaction (cycles greetings)

How to open:

- Open the file directly in your default browser (PowerShell):

```powershell
Start-Process "$PWD\index.html"
```

- Or serve using Python (if installed) and open http://localhost:8000:

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

That's it — open `index.html` and click the "Change greeting" button to see the JavaScript work.
