
// src/components/TrainingDetailPage.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Added Image import

// Define the type for the training data structure
type Training = {
  title: string;
  summary: string;
  tags: string[];
  skillLevel: string;
  deliveryFormat: string;
  duration: string;
  enrollLink: string;
  syllabusLink: string;
  certificationLink: string;
  whatItCovers: { paragraph: string };
  learningObjectives: string[];
  curriculum: { title: string; description: string }[];
  whoShouldAttend: { paragraph: string };
  prerequisites: { paragraph: string };
  certificationAndAssessment: { description: string };
  outcomesAndCareerValue: { paragraph: string };
  enrollmentInfo: {
    availability: string;
    accessPeriod: string;
    pricingNote: string;
    policyLink: string;
  };
  faq: { question: string; answer: string }[];
  imageUrl?: string; // Added imageUrl here
};

// Reusable Section Component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-8 md:py-12 border-b border-base-300">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{title}</h2>
    <div className="prose max-w-none text-base-content/80">{children}</div>
  </section>
);

// Section 1: Program Overview
const ProgramOverview = ({ training }: { training: Training }) => (
  <header className="relative py-16 text-primary-content overflow-hidden min-h-[400px] flex items-center">
    {training.imageUrl && (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${training.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div> {/* Overlay */}
      </div>
    )}
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-left">
      <div className="flex items-center space-x-4 mb-4">
        {training.tags.map(tag => (
          <span key={tag} className="bg-primary-focus text-primary-content text-sm font-medium px-3 py-1 rounded-full border-2 border-primary-content">{tag}</span>
        ))}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">{training.title}</h1>
      <p className="mt-4 text-lg md:text-xl text-primary-content/80">{training.summary}</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <span>Skill Level: <strong>{training.skillLevel}</strong></span>
        <span>Delivery: <strong>{training.deliveryFormat}</strong></span>
        <span>Duration: <strong>{training.duration}</strong></span>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 hidden">
        <Link href={training.enrollLink} className="btn btn-secondary">
          Enroll Now
        </Link>
        <Link href={training.syllabusLink} className="btn btn-ghost">
          Download Syllabus
        </Link>
      </div>
    </div>
  </header>
);

// Section 4: Curriculum Breakdown
const Curriculum = ({ curriculum }: { curriculum: Training['curriculum'] }) => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {curriculum.map((module, index) => (
        <div key={index} className="border border-base-300 rounded-lg">
          <button
            onClick={() => toggleModule(index)}
            className="w-full text-left p-4 font-semibold flex justify-between items-center"
          >
            {module.title}
            <span>{openModule === index ? '−' : '+'}</span>
          </button>
          {openModule === index && (
            <div className="p-4 border-t border-base-300 text-base-content/80">
              <p>{module.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Section 10: FAQs
const FaqSection = ({ faq }: { faq: Training['faq'] }) => (
  <div className="space-y-4">
    {faq.map((item, index) => (
      <details key={index} className="border border-base-300 rounded-lg p-4 group">
        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
          {item.question}
          <span className="group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-2 text-base-content/80">{item.answer}</p>
      </details>
    ))}
  </div>
);


// Main Page Component
const TrainingDetailPage = ({ training }: { training: Training }) => {
  if (!training) {
    return <div className="text-center py-20">Training program not found.</div>;
  }

  return (
    <div className="bg-base-100 text-base-content">
      <ProgramOverview training={training} />

      <main className="max-w-4xl mx-auto px-4 divide-y divide-base-300">
        <Section title="What This Training Covers">
          <p>{training.whatItCovers.paragraph}</p>
        </Section>

        <Section title="Learning Objectives">
          <ul className="list-disc pl-5 space-y-2">
            {training.learningObjectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </Section>

        <Section title="Curriculum Breakdown">
          <Curriculum curriculum={training.curriculum} />
        </Section>

        <Section title="Who Should Attend">
          <p>{training.whoShouldAttend.paragraph}</p>
        </Section>

        <Section title="Prerequisites">
          <p>{training.prerequisites.paragraph}</p>
        </Section>

        <Section title="Certification & Assessment">
          <p>{training.certificationAndAssessment.description}</p>
        </Section>

        <Section title="Training Outcomes & Career Value">
          <p>{training.outcomesAndCareerValue.paragraph}</p>
        </Section>

        <Section title="Enrollment Information">
          <p><strong>Availability:</strong> {training.enrollmentInfo.availability}</p>
          <p><strong>Access:</strong> {training.enrollmentInfo.accessPeriod}</p>
          <p><strong>Pricing:</strong> {training.enrollmentInfo.pricingNote}</p>
          <p><Link href={training.enrollmentInfo.policyLink} className="link link-hover">View our policies</Link></p>
          <div className="mt-6 flex flex-wrap gap-4 hidden">
            <Link href={training.enrollLink} className="btn btn-primary">
              Enroll in Training
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Request More Information
            </Link>
          </div>
        </Section>

        <Section title="Frequently Asked Questions">
          <FaqSection faq={training.faq} />
        </Section>
      </main>
    </div>
  );
};

export default TrainingDetailPage;
