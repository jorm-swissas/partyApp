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
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type EventDetailRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;

const EventDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<EventDetailRouteProp>();
  const { event } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        {/* Event Image */}
        <Image 
          source={{ uri: event.image || 'https://via.placeholder.com/400x200' }} 
          style={styles.eventImage} 
        />

        {/* Event Info */}
        <View style={styles.eventInfo}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{event.category}</Text>
          </View>
          
          <Text style={styles.eventTitle}>{event.title}</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📍</Text>
            <Text style={styles.infoText}>{event.location}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📅</Text>
            <Text style={styles.infoText}>{event.date}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>🕐</Text>
            <Text style={styles.infoText}>{event.time}</Text>
          </View>
          
          {event.description && (
            <View style={styles.descriptionSection}>
              <Text style={styles.sectionTitle}>Beschreibung</Text>
              <Text style={styles.description}>{event.description}</Text>
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Teilnehmen</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Teilen</Text>
          </TouchableOpacity>
        </View>
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
  backButton: {
    fontSize: 24,
    color: '#ffffff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  eventImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#16213e',
  },
  eventInfo: {
    padding: 20,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 15,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    fontSize: 16,
    marginRight: 10,
    width: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#8b8b8b',
  },
  descriptionSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#8b8b8b',
    lineHeight: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
  },
  joinButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetailScreen;