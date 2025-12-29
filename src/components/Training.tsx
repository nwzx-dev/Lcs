"use client";
import React, { useState } from "react";
import image1 from "@/assets/images/carouselImage1.jpg";
import { trainingData } from "@/data/training";

const TrainingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = trainingData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const form = document.createElement("form");
    form.action = "https://formsubmit.co/info@londoncyberschool.ai";
    form.method = "POST";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "email";
    input.value = email;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="bg-base-100 px-6 py-12 md:py-20 lg:px-20 transition-colors duration-300">
        <span className="inline-block bg-blue-200 text-[#001e62] text-sm font-medium px-3 py-1 rounded-full">
          {t.onlineTraining}
        </span>
        <div className="relative px-4 py-12 lg:px-0 flex justify-center">
          <div className="relative w-full">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="md:absolute top-1/2 left-0 md:transform md:-translate-y-1/2 bg-[#00205B] text-white p-8 lg:p-12 w-full lg:w-1/2 shadow-lg rounded-lg z-10">
                <div className="w-full">
                  <h2 className="text-3xl font-bold text-center text-indigo-300 mb-4">
                    🚀 {t.getNotified}
                  </h2>
                  <p className="text-indigo-200 text-center mb-8 text-lg">
                    {t.dropEmail}
                  </p>

                  {submitted ? (
                    <div className="text-green-400 text-center font-medium text-lg">
                      ✅ {t.thanksNotify}
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col md:flex-row gap-4 items-center justify-center"
                    >
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full md:w-2/3 px-4 py-3 border border-indigo-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                      />
                      <button
                        type="submit"
                        className="w-full md:w-auto bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition font-semibold"
                      >
                        {t.notifyMe}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <div className="hidden lg:block w-1/3"></div>

              <div className="w-full lg:w-2/3 overflow-hidden rounded-lg shadow-md z-0">
                <img
                  src={image1.src}
                  alt="LBS Team"
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-[1.1]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPage;