# QualAISummit 2026

Eine moderne Konferenz-Website für die QualAISummit 2026 Konferenz, die sich auf AI in der qualitativen Forschung konzentriert.

## 🚀 Live Demo

Die Website ist verfügbar unter: [https://qualaisummit.github.io/QualAISummit](https://qualaisummit.github.io/QualAISummit)

## 🛠️ Technologie-Stack

- **Frontend**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Sprache**: TypeScript
- **Deployment**: GitHub Pages

## 📋 Features

- ✅ Passwortschutz für alle Seiten
- ✅ Session-Management mit Cookies
- ✅ Responsive Design
- ✅ Moderne Pastel-Farbpalette
- ✅ Drei Hauptseiten: Home, Call for Papers, FAQ

## 🚀 Lokale Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Installation
```bash
# Repository klonen
git clone https://github.com/yourusername/QualAISummit.git
cd QualAISummit

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann verfügbar unter `http://localhost:3000`

### Passwort
Das Passwort für den Zugriff auf alle geschützten Seiten lautet: **QualAISummit**

## 🚀 Deployment auf GitHub Pages

### Automatisches Deployment
1. Repository auf GitHub erstellen
2. Code pushen
3. GitHub Actions Workflow wird automatisch ausgeführt
4. Website wird auf GitHub Pages deployed

### Manuelles Deployment
```bash
# Projekt bauen
npm run build

# Deployment
npm run deploy
```

## 📁 Projektstruktur

```
QualAISummit/
├── app/
│   ├── page.tsx              # Hauptseite
│   ├── call-for-papers/      # Call for Papers Seite
│   ├── faq/                  # FAQ Seite
│   ├── contexts/             # React Context für Auth
│   ├── utils/                # Utility-Funktionen
│   └── globals.css           # Globale Styles
├── .github/workflows/        # GitHub Actions
├── public/                   # Statische Assets
└── tailwind.config.js        # Tailwind Konfiguration
```

## 🎨 Design

Die Website verwendet eine moderne Pastel-Farbpalette:
- **Pastel-Blau**: Primärfarbe
- **Pastel-Grün**: Sekundärfarbe
- **Pastel-Lila**: Akzentfarbe
- **Pastel-Rosa**: Highlight-Farbe
- **Pastel-Orange**: Warnfarbe
- **Pastel-Gelb**: Info-Farbe
- **Pastel-Mint**: Hintergrundfarbe
- **Pastel-Lavendel**: Dekorative Farbe

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

## 🙏 Danksagungen

Basierend auf der ursprünglichen [Agents4Science Website](https://agents4science.stanford.edu/) von Stanford, angepasst für QualAISummit 2026.
