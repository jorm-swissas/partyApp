# PartyApp UI Screens Overview

## 📱 Screen Flow and Features

### 🏠 Home Screen (`home_screen.dart`)
```
┌─────────────────────────────────┐
│ ✨ PartyApp                    🔍│
├─────────────────────────────────┤
│ 📅 Summer Beach Party          │
│ 🏖️ Santa Monica Beach          │
│ 📅 Jul 15, 2024 ⏰ 6:00 PM    │
│ 🎉 Party                       │
├─────────────────────────────────┤
│ 🎵 Music Festival 2024         │
│ 🎪 Central Park                │
│ 📅 Jul 20, 2024 ⏰ 2:00 PM    │
│ 🎭 Festival                    │
├─────────────────────────────────┤
│ 🎤 Rock Concert                │
│ 🏟️ Madison Square Garden       │
│ 📅 Jul 25, 2024 ⏰ 8:00 PM    │
│ 🎵 Concert                     │
└─────────────────────────────────┘
                 ➕ (Floating Action Button)
```

### ➕ Add Event Screen (`add_event_screen.dart`)
```
┌─────────────────────────────────┐
│ ← Add Event                     │
├─────────────────────────────────┤
│ [📸 Add Event Image]            │
│ Tap to select from gallery      │
├─────────────────────────────────┤
│ 📝 Event Title *                │
│ [                             ] │
├─────────────────────────────────┤
│ 📍 Location *                   │
│ [                             ] │
├─────────────────────────────────┤
│ 📅 Date *    |    ⏰ Time *     │
│ [Jul 15, 24] |    [6:00 PM]    │
├─────────────────────────────────┤
│ 🏷️ Category *                   │
│ [Party ▼]                      │
├─────────────────────────────────┤
│ 📄 Description *                │
│ [                             ] │
│ [                             ] │
│ [                             ] │
├─────────────────────────────────┤
│      [Create Event]             │
└─────────────────────────────────┘
```

### 👁️ Event Detail Screen (`event_detail_screen.dart`)
```
┌─────────────────────────────────┐
│        [Event Image]            │
│                                 │
│                             ←   │
└─────────────────────────────────┘
│ 🎉 Summer Beach Party           │
│                        [Party]  │
├─────────────────────────────────┤
│ 📅 Date & Time                 │
│ Friday, July 15, 2024           │
│ 6:00 PM                        │
├─────────────────────────────────┤
│ 📍 Location                     │
│ Santa Monica Beach              │
├─────────────────────────────────┤
│ 📄 Description                  │
│ Join us for an amazing beach    │
│ party with music, drinks, and   │
│ great company!                  │
├─────────────────────────────────┤
│ Created on Jul 10, 2024         │
└─────────────────────────────────┘
            [Share 📤] (Floating Button)
```

## 🎨 Key UI Features

### Event Cards (`event_card.dart`)
- **Image Display**: Event photos with fallback for missing images
- **Category Tags**: Color-coded badges (Purple=Party, Blue=Concert, etc.)
- **Date/Time Icons**: Clear visual indicators with calendar and clock icons
- **Location Icons**: Pin icons for easy location identification
- **Truncated Text**: Prevents overflow with ellipsis

### Form Components (`add_event_screen.dart`)
- **Image Picker**: Tap to select, preview selected image
- **Date/Time Pickers**: Native platform pickers
- **Dropdown Selection**: Categories with custom styling
- **Validation**: Real-time form validation with error messages
- **Loading States**: Progress indicators during submission

### Navigation Flow
1. **Home** → **Event Detail** (tap on event card)
2. **Home** → **Add Event** (tap floating action button)
3. **Add Event** → **Home** (after successful creation)
4. **Event Detail** → **Share Dialog** (tap share button)

### Color Scheme
- **Primary**: Purple (Material Design)
- **Category Colors**:
  - 🎉 Party: Purple
  - 🎭 Festival: Orange  
  - 🎵 Concert: Blue
  - 💼 Conference: Green
  - 🔧 Workshop: Teal
  - 📚 Other: Grey

### Responsive Design
- **Cards**: Adaptive margins and padding
- **Images**: Aspect ratio maintained, error handling
- **Text**: Scalable fonts, proper line heights
- **Buttons**: Sufficient touch targets (44dp minimum)