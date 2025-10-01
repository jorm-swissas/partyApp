import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSelectedCategory } from '../store/eventSlice';
import { EventCategory, Event } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { events, selectedCategory } = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();

  const categories: EventCategory[] = ['Hausparty', 'Party', 'Festival', 'Konzert'];

  const filteredEvents = selectedCategory 
    ? events.filter((event: Event) => event.category === selectedCategory)
    : events;

  const handleCategoryPress = (category: EventCategory) => {
    dispatch(setSelectedCategory(selectedCategory === category ? undefined : category));
  };

  const handleEventPress = (event: Event) => {
    navigation.navigate('EventDetail', { event });
  };

  const renderEventCard = (event: Event) => (
    <TouchableOpacity 
      key={event.id} 
      style={styles.eventCard}
      onPress={() => handleEventPress(event)}
    >
      <Image 
        source={{ uri: event.image || 'https://via.placeholder.com/300x150' }} 
        style={styles.eventImage} 
      />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventLocation}>{event.location}</Text>
        <Text style={styles.eventDateTime}>{event.date} - {event.time}</Text>
        <TouchableOpacity style={styles.moreInfoButton}>
          <Text style={styles.moreInfoText}>ℹ More Info</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PartyApp</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Filter */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategoryText
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Events List */}
      <ScrollView style={styles.eventsContainer}>
        {filteredEvents.map(renderEventCard)}
      </ScrollView>
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
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
    padding: 5,
  },
  icon: {
    fontSize: 20,
    color: '#ffffff',
  },
  categoryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#16213e',
  },
  selectedCategoryButton: {
    backgroundColor: '#ff6b6b',
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#ffffff',
  },
  eventsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  eventCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#16213e',
  },
  eventInfo: {
    padding: 15,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#8b8b8b',
    marginBottom: 5,
  },
  eventDateTime: {
    fontSize: 14,
    color: '#8b8b8b',
    marginBottom: 10,
  },
  moreInfoButton: {
    alignSelf: 'flex-start',
  },
  moreInfoText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default HomeScreen;