import 'dart:io';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/event.dart';

class SupabaseService {
  static final SupabaseClient _client = Supabase.instance.client;
  
  // Get all events
  static Future<List<Event>> getEvents() async {
    try {
      final response = await _client
          .from('events')
          .select()
          .order('created_at', ascending: false);
      
      return (response as List)
          .map((eventData) => Event.fromMap(eventData))
          .toList();
    } catch (e) {
      throw Exception('Failed to fetch events: $e');
    }
  }

  // Create a new event
  static Future<Event> createEvent(Event event) async {
    try {
      final response = await _client
          .from('events')
          .insert(event.toMap())
          .select()
          .single();
      
      return Event.fromMap(response);
    } catch (e) {
      throw Exception('Failed to create event: $e');
    }
  }

  // Update an event
  static Future<Event> updateEvent(Event event) async {
    try {
      final response = await _client
          .from('events')
          .update(event.toMap())
          .eq('id', event.id)
          .select()
          .single();
      
      return Event.fromMap(response);
    } catch (e) {
      throw Exception('Failed to update event: $e');
    }
  }

  // Delete an event
  static Future<void> deleteEvent(String eventId) async {
    try {
      await _client
          .from('events')
          .delete()
          .eq('id', eventId);
    } catch (e) {
      throw Exception('Failed to delete event: $e');
    }
  }

  // Upload image to Supabase Storage
  static Future<String> uploadImage(File imageFile, String fileName) async {
    try {
      final String path = 'event_images/$fileName';
      
      await _client.storage
          .from('event-images')
          .upload(path, imageFile);

      final String publicUrl = _client.storage
          .from('event-images')
          .getPublicUrl(path);

      return publicUrl;
    } catch (e) {
      throw Exception('Failed to upload image: $e');
    }
  }

  // Delete image from Supabase Storage
  static Future<void> deleteImage(String imagePath) async {
    try {
      await _client.storage
          .from('event-images')
          .remove([imagePath]);
    } catch (e) {
      throw Exception('Failed to delete image: $e');
    }
  }
}