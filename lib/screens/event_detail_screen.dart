import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../models/event.dart';

class EventDetailScreen extends StatelessWidget {
  final Event event;

  const EventDetailScreen({
    super.key,
    required this.event,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          // App Bar with Image
          SliverAppBar(
            expandedHeight: 300,
            pinned: true,
            backgroundColor: Theme.of(context).primaryColor,
            flexibleSpace: FlexibleSpaceBar(
              background: event.imageUrl != null
                  ? Image.network(
                      event.imageUrl!,
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stackTrace) {
                        return Container(
                          color: Colors.grey.shade300,
                          child: const Icon(
                            Icons.image_not_supported,
                            size: 64,
                            color: Colors.grey,
                          ),
                        );
                      },
                    )
                  : Container(
                      color: Colors.grey.shade300,
                      child: const Icon(
                        Icons.event,
                        size: 64,
                        color: Colors.grey,
                      ),
                    ),
            ),
          ),
          
          // Content
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Title and Category
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: Text(
                          event.title,
                          style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 12,
                          vertical: 6,
                        ),
                        decoration: BoxDecoration(
                          color: _getCategoryColor(event.category),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Text(
                          event.category,
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                    ],
                  ),
                  
                  const SizedBox(height: 24),
                  
                  // Date and Time Card
                  _buildInfoCard(
                    icon: Icons.schedule,
                    title: 'Date & Time',
                    content: '${DateFormat('EEEE, MMMM dd, yyyy').format(event.date)}\n${event.time}',
                  ),
                  
                  const SizedBox(height: 16),
                  
                  // Location Card
                  _buildInfoCard(
                    icon: Icons.location_on,
                    title: 'Location',
                    content: event.location,
                  ),
                  
                  const SizedBox(height: 16),
                  
                  // Description Card
                  _buildInfoCard(
                    icon: Icons.description,
                    title: 'Description',
                    content: event.description,
                  ),
                  
                  const SizedBox(height: 24),
                  
                  // Created Date
                  Text(
                    'Created on ${DateFormat('MMM dd, yyyy').format(event.createdAt)}',
                    style: TextStyle(
                      color: Colors.grey.shade600,
                      fontSize: 12,
                    ),
                  ),
                  
                  const SizedBox(height: 32),
                ],
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => _shareEvent(context),
        backgroundColor: Theme.of(context).primaryColor,
        icon: const Icon(Icons.share, color: Colors.white),
        label: const Text('Share', style: TextStyle(color: Colors.white)),
      ),
    );
  }

  Widget _buildInfoCard({
    required IconData icon,
    required String title,
    required String content,
  }) {
    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(
                  icon,
                  size: 24,
                  color: Colors.purple,
                ),
                const SizedBox(width: 8),
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Text(
              content,
              style: const TextStyle(
                fontSize: 16,
                height: 1.5,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Color _getCategoryColor(String category) {
    switch (category.toLowerCase()) {
      case 'party':
        return Colors.purple;
      case 'festival':
        return Colors.orange;
      case 'concert':
        return Colors.blue;
      case 'conference':
        return Colors.green;
      case 'workshop':
        return Colors.teal;
      default:
        return Colors.grey;
    }
  }

  void _shareEvent(BuildContext context) {
    final shareText = '''
📅 ${event.title}

📍 ${event.location}
🗓️ ${DateFormat('EEEE, MMMM dd, yyyy').format(event.date)}
⏰ ${event.time}
🏷️ ${event.category}

${event.description}

Created with PartyApp
''';

    // In a real app, you would use the share_plus package here
    // For now, we'll show a dialog with the share text
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Share Event'),
        content: SingleChildScrollView(
          child: Text(shareText),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
          TextButton(
            onPressed: () {
              // In a real app, implement sharing functionality
              Navigator.pop(context);
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Share functionality would be implemented here'),
                ),
              );
            },
            child: const Text('Share'),
          ),
        ],
      ),
    );
  }
}