# PartyApp Quick Start Guide 🚀

## Immediate Setup (5 minutes)

### 1. Get Your Supabase Credentials
1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **Settings** → **API**
4. Copy your **Project URL** and **anon public** key

### 2. Configure the App
1. Open `lib/main.dart`
2. Replace these lines:
```dart
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
```
With your actual credentials:
```dart
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-actual-anon-key-here';
```

### 3. Set Up Database
1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste this SQL:

```sql
-- Create events table
CREATE TABLE events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    date DATE NOT NULL,
    time TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations
CREATE POLICY "Allow all operations on events" ON events FOR ALL USING (true);
```

3. Click **Run** to execute

### 4. Set Up Storage
1. In Supabase dashboard, go to **Storage**
2. Click **Create bucket**
3. Name it `event-images`
4. Make it **Public**
5. Go to **Storage** → **Policies** → **event-images**
6. Click **New Policy** → **For full customization**
7. Use this policy:

```sql
CREATE POLICY "Allow public access to event images" 
ON storage.objects FOR ALL 
TO public 
USING (bucket_id = 'event-images');
```

### 5. Run the App
```bash
flutter pub get
flutter run
```

## App Features Overview

### 🏠 Home Screen
- View all events in a beautiful card layout
- Pull to refresh
- Tap events to view details
- Floating action button to add new events

### ➕ Add Event Screen
- Complete form with all required fields
- Date and time picker
- Category selection
- Image picker from gallery
- Form validation

### 📱 Event Detail Screen
- Full event information display
- High-quality image viewing
- Share functionality
- Clean, modern design

### 🎨 Design Features
- Material Design 3
- Category-based color coding
- Responsive layouts
- Loading states and error handling
- Smooth animations

## Troubleshooting

**App crashes on startup?**
- Make sure Supabase credentials are correctly configured
- Check your internet connection

**Can't upload images?**
- Verify the storage bucket is created and public
- Check storage policies are set up correctly

**No events showing?**
- Create your first event using the + button
- Check if database table was created properly

## Next Steps

1. **Customize UI**: Modify colors, fonts, and layouts in the theme
2. **Add Authentication**: Implement user login/signup with Supabase Auth
3. **Add Features**: Event editing, deletion, favorites, notifications
4. **Deploy**: Build and deploy to Google Play Store / Apple App Store

Happy event planning! 🎉