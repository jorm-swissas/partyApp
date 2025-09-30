class Event {
  final String id;
  final String title;
  final String location;
  final DateTime date;
  final String time;
  final String description;
  final String category;
  final String? imageUrl;
  final DateTime createdAt;

  Event({
    required this.id,
    required this.title,
    required this.location,
    required this.date,
    required this.time,
    required this.description,
    required this.category,
    this.imageUrl,
    required this.createdAt,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'location': location,
      'date': date.toIso8601String(),
      'time': time,
      'description': description,
      'category': category,
      'image_url': imageUrl,
      'created_at': createdAt.toIso8601String(),
    };
  }

  factory Event.fromMap(Map<String, dynamic> map) {
    return Event(
      id: map['id'] ?? '',
      title: map['title'] ?? '',
      location: map['location'] ?? '',
      date: DateTime.parse(map['date']),
      time: map['time'] ?? '',
      description: map['description'] ?? '',
      category: map['category'] ?? '',
      imageUrl: map['image_url'],
      createdAt: DateTime.parse(map['created_at']),
    );
  }

  Event copyWith({
    String? id,
    String? title,
    String? location,
    DateTime? date,
    String? time,
    String? description,
    String? category,
    String? imageUrl,
    DateTime? createdAt,
  }) {
    return Event(
      id: id ?? this.id,
      title: title ?? this.title,
      location: location ?? this.location,
      date: date ?? this.date,
      time: time ?? this.time,
      description: description ?? this.description,
      category: category ?? this.category,
      imageUrl: imageUrl ?? this.imageUrl,
      createdAt: createdAt ?? this.createdAt,
    );
  }
}