import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event, EventCategory } from '../types';

interface EventState {
  events: Event[];
  selectedCategory?: EventCategory;
}

const initialState: EventState = {
  events: [
    {
      id: '1',
      title: 'Hausparty',
      description: 'Im Zimmerhorr 2',
      location: 'Zimmerhorr 2',
      date: 'Fri, 18 Jun',
      time: '22:00',
      category: 'Hausparty',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Azulu Festival',
      description: 'Steinenvorstadt 55',
      location: 'Steinenvorstadt 55',
      date: 'Fri, 16 Mai',
      time: '20:00',
      category: 'Festival',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'GIMS Konzert',
      description: 'Clarastrasse 2',
      location: 'Clarastrasse 2',
      date: 'Sa, 1 Feb',
      time: '20:00',
      category: 'Konzert',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400',
      createdAt: new Date().toISOString(),
    },
  ],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    setSelectedCategory: (state, action: PayloadAction<EventCategory | undefined>) => {
      state.selectedCategory = action.payload;
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
  },
});

export const { addEvent, setSelectedCategory, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;