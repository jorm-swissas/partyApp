export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  category: EventCategory;
  image?: string;
  createdAt: string;
}

export type EventCategory = 'Hausparty' | 'Party' | 'Festival' | 'Konzert';

export interface EventFormData {
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  category: EventCategory;
  image?: string;
}

export interface AppState {
  events: Event[];
  selectedCategory?: EventCategory;
}