"use client";

import React, { useState, useEffect } from 'react';
import { liveTrainingEventsData, filterOptions, LiveTrainingEvent } from '@/data/liveTrainingEvents';
import { liveTrainingPageData } from '@/data/liveTrainingPage'; // Import liveTrainingPageData
import { Search, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Added Link import
import NewsletterSubscription from './NewsletterSubscription';
import EventCard from './EventCard'; // Import EventCard

// Main Page Component
const LiveTrainingPage = () => {
  const [events, setEvents] = useState<LiveTrainingEvent[]>(liveTrainingEventsData);
  const [filters, setFilters] = useState({
    eventType: 'All',
    topicArea: 'All',
    deliveryMode: 'All',
    region: 'All',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    let filteredEvents = liveTrainingEventsData;

    // Filter by search term
    if (searchTerm) {
      filteredEvents = filteredEvents.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by dropdowns
    filteredEvents = filteredEvents.filter(event => {
      return (
        (filters.eventType === 'All' || event.eventType === filters.eventType) &&
        (filters.topicArea === 'All' || event.topicArea === filters.topicArea) &&
        (filters.deliveryMode === 'All' || event.deliveryMode === filters.deliveryMode) &&
        (filters.region === 'All' || event.region === filters.region)
      );
    });

    setEvents(filteredEvents);
  }, [filters, searchTerm]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  return (
    <div className="bg-base-100 text-base-content">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterSection 
          filters={filters}
          searchTerm={searchTerm}
          onFilterChange={handleFilterChange}
          onSearchChange={setSearchTerm}
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
        <EventList events={events} />
      </div>
      <TrustSection />
      <CtaSection />
    </div>
  );
};

// Hero Section
const HeroSection = () => (
  <div className="bg-base-200 text-center py-16">
    <h1 className="text-4xl md:text-5xl font-bold">{liveTrainingPageData.hero.title}</h1>
    <p className="mt-4 text-lg max-w-3xl mx-auto text-base-content/80">
      {liveTrainingPageData.hero.subtitle}
    </p>
    <p className="mt-2 text-sm text-base-content/60">
      {liveTrainingPageData.hero.secondaryText}
    </p>
  </div>
);

// Filter Section
const FilterSection = ({ filters, searchTerm, onFilterChange, onSearchChange, mobileFiltersOpen, setMobileFiltersOpen }: any) => (
  <div className="mb-12">
    <div className="flex justify-between items-center mb-4">
        <div className="relative flex-grow max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/50" />
            <input
                type="text"
                placeholder="Search events..."
                className="input input-bordered w-full pl-10"
                value={searchTerm}
                onChange={e => onSearchChange(e.target.value)}
            />
        </div>
        <button 
            className="btn btn-ghost lg:hidden"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filters
        </button>
    </div>
    <div className={`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${mobileFiltersOpen ? 'grid' : 'hidden'} lg:grid`}>
      {Object.entries(filterOptions).map(([key, options]) => (
        <select
          key={key}
          className="select select-bordered w-full"
          value={filters[key]}
          onChange={e => onFilterChange(key, e.target.value)}
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ))}
    </div>
  </div>
);

// Event List & Card
const EventList = ({ events }: { events: LiveTrainingEvent[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {events.length > 0 ? (
      events.map(event => <EventCard key={event.id} event={event} />)
    ) : (
      <div className="text-center py-16 col-span-full">
        <p className="text-xl font-semibold">No events found.</p>
        <p className="text-base-content/70 mt-2">Try adjusting your filters.</p>
      </div>
    )}
  </div>
);

// Trust Section
const TrustSection = () => (
  <div className="bg-base-200 py-16">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-8">{liveTrainingPageData.trust.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {liveTrainingPageData.trust.cards.map((card, index) => (
          <div key={index} className="p-6">
            <h4 className="text-xl font-semibold">{card.title}</h4>
            <p className="mt-2 text-base-content/70">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// CTA Section
const CtaSection = () => (
  <div>
    {/* <NewsletterSubscription/> */}
  </div>
);

export default LiveTrainingPage;