# PartyApp - Event Management Mobile Application

Eine React Native TypeScript Anwendung für die Verwaltung von Events, die sowohl auf Android als auch iOS läuft.

## 🎉 Features

- **Event-Erstellung** mit Foto-Upload
- **Event-Listing** mit Kategorien (Hausparty, Party, Festival, Konzert)
- **Event-Details** Ansicht
- **Modernes Dark Theme** UI Design
- **Cross-Platform** Support (Android & iOS)
- **TypeScript** für bessere Code-Qualität
- **Redux Toolkit** für State Management
- **React Navigation** für Navigation

## 📱 Screenshots

Die App implementiert das Design aus den bereitgestellten Screenshots mit:
- Event-Erstellungsformular mit Foto-Upload
- Event-Karten mit Kategorie-Filtern
- Detailansicht für Events
- Responsive und moderne UI

## 🛠 Tech Stack

- **React Native** 0.81.4
- **TypeScript** 5.9.2
- **React Navigation** 6.x
- **Redux Toolkit** für State Management
- **React Native Vector Icons** für Icons
- **React Native Image Picker** für Foto-Upload

## 🚀 Installation & Setup

### Voraussetzungen

- Node.js (>= 18)
- npm oder yarn
- React Native CLI
- Android Studio (für Android Development)
- Xcode (für iOS Development, nur auf macOS)

### Installation

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **iOS Setup (nur macOS):**
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Metro Bundler starten:**
   ```bash
   npm start
   ```

4. **App ausführen:**
   
   **Android:**
   ```bash
   npm run android
   ```
   
   **iOS:**
   ```bash
   npm run ios
   ```

## 🏗 Projektstruktur

```
src/
├── components/          # Wiederverwendbare UI Komponenten
├── navigation/          # React Navigation Setup
│   └── AppNavigator.tsx # Haupt-Navigation
├── screens/            # App Screens
│   ├── HomeScreen.tsx   # Event-Liste
│   ├── CreateEventScreen.tsx # Event-Erstellung
│   └── EventDetailScreen.tsx # Event-Details
├── store/              # Redux Store
│   ├── index.ts        # Store Konfiguration
│   └── eventSlice.ts   # Event State Management
├── types/              # TypeScript Typen
│   └── index.ts        # App-spezifische Typen
└── utils/              # Utility Funktionen
```

## 🎯 Verwendung

### Event erstellen
1. Navigiere zum "Erstellen" Tab
2. Fülle das Formular aus (Titel, Ort, Datum, Zeit, Beschreibung)
3. Wähle eine Kategorie (Hausparty, Party, Festival, Konzert)
4. Optional: Foto hinzufügen
5. "Event veröffentlichen" drücken

### Events anzeigen
1. Auf dem Home-Screen werden alle Events angezeigt
2. Verwende die Kategorie-Filter oben zum Filtern
3. Tippe auf ein Event für Details

## 🧪 Testing

```bash
# TypeScript Type Check
npm run typecheck

# Linting
npm run lint

# Tests ausführen
npm test
```

## 📱 Development Tasks

Das Projekt enthält VS Code Tasks für den Development Workflow:

- **Start Metro Bundler**: Startet den React Native Metro Bundler

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne eine Pull Request

## 📋 Roadmap

- [ ] Push Notifications für neue Events
- [ ] Benutzer-Authentifizierung
- [ ] Event-Teilnahme System
- [ ] Social Sharing Features
- [ ] Map Integration für Event-Standorte
- [ ] Kalender Integration
- [ ] Event-Such-Funktionalität

## 🐛 Bekannte Issues

- Image Picker benötigt Native Module Setup für Produktionsumgebung
- Icons könnten zusätzliche native Konfiguration erfordern

## 📄 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizensiert.

## 👨‍💻 Entwickler

Entwickelt für eine moderne Event-Management-Erfahrung auf mobilen Geräten.

---

**Hinweis**: Diese App ist eine Demo-Implementation basierend auf den bereitgestellten UI-Screenshots. Für Produktionsumgebungen sollten zusätzliche Features wie Backend-Integration, Authentifizierung und erweiterte Error-Handling implementiert werden.