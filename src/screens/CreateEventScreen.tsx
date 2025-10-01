import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { addEvent } from '../store/eventSlice';
import { EventCategory, Event } from '../types';
import { useNavigation } from '@react-navigation/native';

const CreateEventScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('Hausparty');
  const [image, setImage] = useState<string | undefined>();
  
  // Date/Time picker visibility states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const categories: EventCategory[] = ['Hausparty', 'Party', 'Festival', 'Konzert'];

  const handleImageUpload = () => {
    // Placeholder for image picker functionality
    Alert.alert('Foto einfügen', 'Bildauswahl-Funktionalität wird hier implementiert');
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleDatePress = () => {
    if (Platform.OS === 'web') {
      // Für Web: HTML5 date input verwenden
      const input = document.createElement('input');
      input.type = 'date';
      input.min = new Date().toISOString().split('T')[0];
      input.style.position = 'absolute';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      
      input.onchange = (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value) {
          setDate(new Date(target.value));
        }
        document.body.removeChild(input);
      };
      
      input.click();
    } else {
      setShowDatePicker(true);
    }
  };

  const handleTimePress = () => {
    if (Platform.OS === 'web') {
      // Für Web: HTML5 time input verwenden
      const input = document.createElement('input');
      input.type = 'time';
      input.style.position = 'absolute';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      
      input.onchange = (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value) {
          const [hours, minutes] = target.value.split(':');
          const newTime = new Date();
          newTime.setHours(parseInt(hours), parseInt(minutes));
          setTime(newTime);
        }
        document.body.removeChild(input);
      };
      
      input.click();
    } else {
      setShowTimePicker(true);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSubmit = () => {
    if (!title || !location || !date || !time) {
      Alert.alert('Fehler', 'Bitte füllen Sie alle Pflichtfelder aus');
      return;
    }

    const newEvent: Event = {
      id: Date.now().toString(),
      title,
      location,
      date: formatDate(date),
      time: formatTime(time),
      description,
      category: selectedCategory,
      image,
      createdAt: new Date().toISOString(),
    };

    dispatch(addEvent(newEvent));
    Alert.alert('Erfolg', 'Event wurde erfolgreich erstellt!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PartyApp</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>×</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Photo Upload */}
        <TouchableOpacity style={styles.photoUpload} onPress={handleImageUpload}>
          {image ? (
            <Image source={{ uri: image }} style={styles.uploadedImage} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <Text style={styles.cameraIcon}>📷</Text>
              <Text style={styles.photoText}>Foto einfügen</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Form Fields */}
        <View style={styles.formSection}>
          <TextInput
            style={styles.input}
            placeholder="Titel"
            placeholderTextColor="#8b8b8b"
            value={title}
            onChangeText={setTitle}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Ort"
            placeholderTextColor="#8b8b8b"
            value={location}
            onChangeText={setLocation}
          />
          
          <View style={styles.dateTimeRow}>
            {/* Date Picker Button */}
            <TouchableOpacity
              style={[styles.input, styles.halfInput, styles.dateTimeButton]}
              onPress={handleDatePress}
            >
              <Text style={[styles.dateTimeText, !date && styles.placeholderText]}>
                {date ? formatDate(date) : 'Datum'}
              </Text>
              <Text style={styles.iconText}>📅</Text>
            </TouchableOpacity>
            
            {/* Time Picker Button */}
            <TouchableOpacity
              style={[styles.input, styles.halfInput, styles.dateTimeButton]}
              onPress={handleTimePress}
            >
              <Text style={[styles.dateTimeText, !time && styles.placeholderText]}>
                {time ? formatTime(time) : 'Uhrzeit'}
              </Text>
              <Text style={styles.iconText}>🕐</Text>
            </TouchableOpacity>
          </View>
          
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Beschreibung"
            placeholderTextColor="#8b8b8b"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Category Selection */}
        <View style={styles.categorySection}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Event veröffentlichen</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
          minimumDate={new Date()}
        />
      )}

      {/* Time Picker Modal */}
      {showTimePicker && (
        <DateTimePicker
          value={time || new Date()}
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onTimeChange}
          is24Hour={true}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1a1a2e',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  closeButton: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '300',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  photoUpload: {
    marginTop: 20,
    marginBottom: 30,
  },
  photoPlaceholder: {
    backgroundColor: '#ff6b6b',
    borderRadius: 15,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  cameraIcon: {
    fontSize: 40,
    color: '#ffffff',
    marginBottom: 10,
  },
  photoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  formSection: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: '#ffffff',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  dateTimeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTimeText: {
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
  },
  iconText: {
    fontSize: 18,
    color: '#8b8b8b',
  },
  placeholderText: {
    color: '#8b8b8b',
  },
  categorySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: '#16213e',
  },
  selectedCategoryButton: {
    backgroundColor: '#ff6b6b',
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#ffffff',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateEventScreen;