'use client';

import React from 'react';
import { becomeAnInstructorData } from '@/data/becomeAnInstructor';
import { CheckCircle } from 'lucide-react';

const BecomeAnInstructorPage = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-primary-content"
        style={{ backgroundImage: becomeAnInstructorData.hero.backgroundImage }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold">{becomeAnInstructorData.hero.title}</h1>
          <p className="mt-4 text-xl md:text-2xl text-primary-content/80">{becomeAnInstructorData.hero.subtitle}</p>
          <a href="#apply" className="btn btn-secondary btn-xl mt-8">
            {becomeAnInstructorData.hero.cta}
          </a>
        </div>
      </section>

      {/* Why Teach With Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{becomeAnInstructorData.whyTeachWithUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {becomeAnInstructorData.whyTeachWithUs.points.map((point, index) => (
              <div key={index} className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="text-2xl font-bold">{point.title}</h3>
                  <p className="text-lg">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{becomeAnInstructorData.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {becomeAnInstructorData.benefits.points.map((point, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="text-2xl font-bold">{point.title}</h3>
                  <p className="text-lg">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{becomeAnInstructorData.whoWeAreLookingFor.title}</h2>
          <p className="text-xl text-center text-base-content/80 mb-12">{becomeAnInstructorData.whoWeAreLookingFor.description}</p>
          <ul className="space-y-4">
            {becomeAnInstructorData.whoWeAreLookingFor.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-8 h-8 text-success mr-4 mt-1 flex-shrink-0" /> {/* Increased icon size */}
                <span className="text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{becomeAnInstructorData.ourProcess.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to lg:grid-cols-2 */}
            {becomeAnInstructorData.ourProcess.steps.map((step, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20"> {/* Removed bg-base-200 to alternate background */}
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{becomeAnInstructorData.apply.title}</h2>
          <p className="text-lg text-center text-base-content/80 mb-12">{becomeAnInstructorData.apply.description}</p>
          <div className="text-center space-y-6">
            <p className="text-xl font-semibold text-primary">
              {becomeAnInstructorData.apply.instruction1}
            </p>
            <a href={`mailto:${becomeAnInstructorData.apply.emailAddress}`} className="text-2xl font-bold text-secondary hover:underline">
              {becomeAnInstructorData.apply.emailAddress}
            </a>
            <p className="text-lg text-base-content/80">
              {becomeAnInstructorData.apply.instruction2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeAnInstructorPage;
