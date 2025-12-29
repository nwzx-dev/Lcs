"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiveTrainingEvent } from '@/data/liveTrainingEvents';

// Reusable Section Component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-8 md:py-12 border-b border-base-300">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{title}</h2>
    <div className="prose max-w-none text-base-content/80">{children}</div>
  </section>
);

// Main Page Component
const LiveTrainingDetailPage = ({ event }: { event: LiveTrainingEvent }) => {
  if (!event) {
    return <div className="text-center py-20">Live training event not found.</div>;
  }

  return (
    <div className="bg-base-100 text-base-content">
      <header className="relative py-16 text-primary-content overflow-hidden min-h-[400px] flex items-center">
        {event.imageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${event.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-primary/70"></div> {/* Overlay */}
          </div>
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-left">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-primary-focus text-primary-content text-sm font-medium px-3 py-1 rounded-full border-2 border-primary-content">{event.eventType}</span>
            <span className="bg-primary-focus text-primary-content text-sm font-medium px-3 py-1 rounded-full border-2 border-primary-content">{event.topicArea}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{event.title} - {event.city}</h1>
          <p className="mt-4 text-lg md:text-xl text-primary-content/80">{event.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span>Date: <strong>{event.date}</strong></span>
            <span>Duration: <strong>{event.duration}</strong></span>
            <span>Schedule: <strong>{event.schedule}</strong></span>
            <span>Delivery: <strong>{event.deliveryMode}</strong></span>
            <span>Region: <strong>{event.region}</strong></span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 hidden"> {/* Hidden buttons */}
            <Link href={event.detailsLink} className="btn btn-secondary">
              Enroll Now
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Request More Information
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 divide-y divide-base-300">
        <Section title="Event Overview">
          <p>{event.summary}</p>
        </Section>

        <Section title="What You Will Learn">
          <ul className="list-disc pl-5 space-y-2">
            <li>Understand the core principles of {event.topicArea}.</li>
            <li>Learn practical strategies for {event.topicArea} in a live environment.</li>
            <li>Engage with experts and peers in interactive sessions.</li>
            <li>Gain insights into real-world applications and case studies.</li>
          </ul>
        </Section>

        <Section title="Who Should Attend">
          <p>This live training is ideal for professionals interested in {event.topicArea}, including {event.eventType.toLowerCase()} participants, managers, and anyone looking to enhance their skills in a dynamic, interactive setting.</p>
        </Section>

        <Section title="Logistics">
          <p><strong>Location:</strong> {event.city}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Duration:</strong> {event.duration}</p>
          <p><strong>Schedule:</strong> {event.schedule}</p>
          <p><strong>Delivery Mode:</strong> {event.deliveryMode}</p>
          <p><strong>Region:</strong> {event.region}</p>
        </Section>

        <div className="hidden">
          <Section title="Enrollment">
            <p>For enrollment details and to secure your spot, please visit the <Link href={event.detailsLink} className="link link-hover">event registration page</Link>.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={event.detailsLink} className="btn btn-primary">
                Register Now
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Contact Us
              </Link>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default LiveTrainingDetailPage;
