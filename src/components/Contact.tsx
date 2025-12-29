import React from "react";
import { contactData } from "@/data/contact";
import { Mail, MapPin } from "lucide-react"; // Ensure MapPin is imported
import contactHeroImage from "@/assets/images/annie-spratt-MChSQHxGZrQ-unsplash.jpg";

const ContactPage = () => {
  const { t } = contactData;

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full md:h-[60vh] h-[40vh] overflow-hidden">
        <img
          src={contactHeroImage.src}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-primary-content px-4">
          <h1 className="text-4xl md:text-6xl font-semibold drop-shadow-lg mb-4">
            {t.contactUs}
          </h1>
          <p className="mt-4 md:text-lg drop-shadow-md max-w-2xl">
            {t.contactUsDescription}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12">
          {/* Contact Form Section */}
          <div className="bg-base-200 p-8 rounded-lg border border-base-300 hidden">
            <h2 className="text-3xl font-semibold mb-6 text-primary">{t.sendUsAMessage}</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-base-content/70 mb-2">
                  {t.yourName}
                </label>
                <input
                  type="text"
                  id="name"
                  className="input input-bordered w-full"
                  placeholder={t.yourNamePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-base-content/70 mb-2">
                  {t.yourEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full"
                  placeholder={t.yourEmailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-base-content/70 mb-2">
                  {t.yourMessage}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="textarea textarea-bordered w-full"
                  placeholder={t.yourMessagePlaceholder}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                {t.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Contact Details Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          {t.getInTouch}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Adjusted grid */}
          {/* Email Card */}
          <div className="card bg-base-200 border border-base-300 p-8 flex flex-row items-start space-x-4 hover:border-primary transition-colors shadow-xl">
            <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-2">{t.email}</h3>
              <p className="text-lg text-base-content/80">{t.emailAddressValue}</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="card bg-base-200 border border-base-300 p-8 flex flex-row items-start space-x-4 hover:border-primary transition-colors shadow-xl">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" /> {/* Using MapPin icon for address */}
            <div>
              <h3 className="text-3xl font-semibold mb-2">{t.address}</h3>
              <p className="text-lg text-base-content/80">{t.addressValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
