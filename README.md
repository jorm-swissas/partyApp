# PartyApp 🎉

A Flutter mobile application for creating and sharing events like parties, festivals, and concerts. Users can create events with images, location, date, time, description, and categories, with images stored in Supabase Storage for sharing.

## Features

- **Event Creation**: Create events with title, location, date, time, description, category, and images
- **Image Upload**: Select images from gallery and upload to Supabase Storage
- **Event Categories**: Organize events by type (Party, Festival, Concert, Conference, Workshop, Other)
- **Event Sharing**: Share event details with others
- **Modern UI**: Clean, intuitive Material Design interface
- **Real-time Storage**: All data stored securely in Supabase

## Screenshots

*Screenshots will be available after UI implementation*

## Setup Instructions

### Prerequisites

- Flutter SDK (>=3.10.0)
- Dart SDK (>=3.0.0)
- Supabase account

### 1. Clone the Repository

```bash
git clone https://github.com/jorm-swissas/partyApp.git
cd partyApp
```

### 2. Install Dependencies

```bash
flutter pub get
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API to get your URL and anon key
3. Execute the SQL from `supabase_setup.md` in your Supabase SQL editor
4. Update the credentials in `lib/main.dart`:

```dart
await Supabase.initialize(
  url: 'YOUR_SUPABASE_URL',
  anonKey: 'YOUR_SUPABASE_ANON_KEY',
);
```

### 4. Run the Application

```bash
flutter run
```

## Project Structure

```
lib/
├── main.dart                 # App entry point and Supabase initialization
├── models/
│   └── event.dart           # Event data model
├── services/
│   └── supabase_service.dart # Database and storage operations
├── screens/
│   ├── home_screen.dart     # Main screen with event list
│   ├── add_event_screen.dart # Create new event form
│   └── event_detail_screen.dart # Event details view
└── widgets/
    └── event_card.dart      # Event list item widget
```

## Dependencies

- **flutter**: Flutter SDK
- **supabase_flutter**: Supabase client for Flutter
- **image_picker**: Select images from gallery/camera
- **intl**: Date formatting and internationalization
- **uuid**: Generate unique IDs
- **cupertino_icons**: iOS-style icons

## Database Schema

The app uses a simple `events` table in Supabase with the following structure:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Event title |
| location | TEXT | Event location |
| date | DATE | Event date |
| time | TEXT | Event time |
| description | TEXT | Event description |
| category | TEXT | Event category |
| image_url | TEXT | Supabase Storage URL for event image |
| created_at | TIMESTAMP | Creation timestamp |

## Storage

Images are stored in Supabase Storage in the `event-images` bucket with public access for sharing.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.
