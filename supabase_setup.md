# Supabase Configuration
# Replace these values with your actual Supabase project credentials

SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here

# Database Schema
# Run this SQL in your Supabase SQL editor to create the events table:

/*
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

-- Create policy to allow all operations (you may want to restrict this)
CREATE POLICY "Allow all operations on events" ON events FOR ALL USING (true);

-- Create storage bucket for event images
INSERT INTO storage.buckets (id, name, public) VALUES ('event-images', 'event-images', true);

-- Create policy for storage bucket
CREATE POLICY "Allow public access to event images" ON storage.objects FOR ALL USING (bucket_id = 'event-images');
*/