// src/components/CertificationDetailPage.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const CertificationDetailPage = ({ certification }: { certification: any }) => {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <header className="bg-primary text-primary-content text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">{certification.name}</h1>
        <p className="mt-4 text-lg md:text-xl text-primary-content/80 max-w-3xl mx-auto">{certification.description}</p>
        <Link href={certification.enrollLink} className="mt-8 btn btn-secondary">
          Get Certified
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">

            <section>
              <h2 className="text-3xl font-bold border-b border-base-300 pb-4 text-primary">About this Certification</h2>
              <p className="mt-6 text-base-content/80 leading-relaxed">{certification.about}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold border-b border-base-300 pb-4 text-primary">Exam Details</h2>
              <ul className="mt-6 space-y-4">
                {certification.examDetails.map((detail: any, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span className="text-base-content/80"><strong>{detail.label}:</strong> {detail.value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold border-b border-base-300 pb-4 text-primary">Who is this certification for?</h2>
              <ul className="mt-6 space-y-2 list-disc pl-5">
                {certification.whoShouldAttend.map((role: string, index: number) => (
                  <li key={index} className="text-base-content/80">{role}</li>
                ))}
              </ul>
            </section>

          </div>

          
        </div>
      </main>
    </div>
  );
};

export default CertificationDetailPage;