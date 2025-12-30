"use client";

import React from 'react';
import { termsData } from '@/data/terms';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-base-100 text-base-content py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">{termsData.title}</h1>
        </div>
        <div className="prose max-w-none">
          {termsData.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-3xl font-semibold text-primary">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;