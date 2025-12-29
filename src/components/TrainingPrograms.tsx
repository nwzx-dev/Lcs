"use client";

import React, { useState } from 'react';
import { trainingPrograms } from '@/data/trainingPrograms';
import { Search, ChevronDown, Book, Clock, BarChart, Tag } from 'lucide-react';
import Image from 'next/image';

const TrainingProgramsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const categories = ['All', ...Array.from(new Set(trainingPrograms.map(p => p.category)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredPrograms = trainingPrograms.filter(program => {
    return (
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'All' || program.category === category) &&
      (difficulty === 'All' || program.difficulty === difficulty)
    );
  });

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-primary-content text-center py-20">
        <h1 className="text-5xl font-bold">Training Programs</h1>
        <p className="text-xl mt-4">Explore all professional trainings offered by London Cyber School.</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-base-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content opacity-50" />
              <input
                type="text"
                placeholder="Search for a training..."
                className="input input-bordered w-full pl-10"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="select select-bordered w-full"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="relative">
              <select
                className="select select-bordered w-full"
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
              >
                {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Training Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map(program => (
            <div key={program.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure><Image src={program.imageUrl} alt={program.title} width={400} height={225} className="object-cover" /></figure>
              <div className="card-body">
                <h2 className="card-title">{program.title}</h2>
                <p>{program.description}</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-base-content opacity-80">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4" />
                    <span>{program.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{program.category}</span>
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <a href={program.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Training
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredPrograms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl">No training programs found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingProgramsPage;
