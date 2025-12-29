"use client";

import {
  FiBox,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg"; // Assuming logo path is correct

import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { footerData } from "@/data/footer";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribing:", formData);
    // In a real application, you would handle the form submission here.
    setFormData({
      firstName: "",
      lastName: "",
      email: ""
    });
  };

  // Social media links - update these with your actual social media URLs
  const socialLinks = [
    // {
    //   name: "Facebook",
    //   icon: FaFacebookF,
    //   url: "https://facebook.com/cyberschool",
    //   hoverColor: "hover:text-blue-500"
    // },
    // {
    //   name: "Twitter",
    //   icon: FaTwitter,
    //   url: "https://twitter.com/cyberschool",
    //   hoverColor: "hover:text-sky-400"
    // },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/london-cyber-school/",
      hoverColor: "hover:text-blue-600"
    },
    // {
    //   name: "Instagram",
    //   icon: FaInstagram,
    //   url: "https://instagram.com/cyberschool",
    //   hoverColor: "hover:text-pink-500"
    // },
    // {
    //   name: "YouTube",
    //   icon: FaYoutube,
    //   url: "https://youtube.com/cyberschool",
    //   hoverColor: "hover:text-red-500"
    // }
  ];

  return (
    <footer className="bg-primary text-primary-content transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="px-4 pt-16 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">

          {/* Certificates Section */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold tracking-wide mb-6 text-base text-primary-content transition-colors duration-300">
              {footerData.certificates.title}
            </h3>
            <ul className="space-y-4">
              {footerData.certificates.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-content text-opacity-70 hover:text-secondary transition-colors duration-200 leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Section */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold tracking-wide mb-6 text-base text-primary-content transition-colors duration-300">
              {footerData.courses.title}
            </h3>
            <ul className="space-y-4">
              {footerData.courses.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-content text-opacity-70 hover:text-secondary transition-colors duration-200 leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help and Support Section */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold tracking-wide mb-6 text-base text-primary-content transition-colors duration-300">
              {footerData.helpSupport.title}
            </h3>
            <ul className="space-y-4">
              {footerData.helpSupport.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-content text-opacity-70 hover:text-secondary transition-colors duration-200 leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold tracking-wide mb-6 text-base text-primary-content transition-colors duration-300">
              {footerData.quickLinks.title}
            </h3>
            <ul className="space-y-4">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-content text-opacity-70 hover:text-secondary transition-colors duration-200 leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="mt-16 pt-12 border-t border-primary-focus">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Company Info */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center mb-6"
              >
                <Image src={logo} alt="Cyber School logo" width={48} height={48}/>

                <span className="ml-3 text-2xl font-bold tracking-wide text-primary-content uppercase transition-colors duration-300">
                  {footerData.companyInfo.name}
                </span>
              </Link>
              <div className="max-w-lg">
                <p className="leading-relaxed mb-8 text-base text-primary-content text-opacity-70 transition-colors duration-3_00">
                  {footerData.companyInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-focus bg-primary-focus py-6 transition-colors duration-300">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-primary-content text-opacity-70 transition-colors duration-300">
                {footerData.bottomBar.copyright} {footerData.bottomBar.allRightsReserved}
              </p>
              <div className="flex space-x-4 text-sm">
                <Link 
                  href="/terms" 
                  className="text-primary-content text-opacity-70 hover:text-secondary transition-colors duration-200"
                >
                  {footerData.bottomBar.termsOfService}
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-primary-content text-opacity-70 hover:text-secondary transition-colors duration-200"
                >
                  {footerData.bottomBar.privacyPolicy}
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-primary-content text-opacity-70 mr-2">
                {footerData.bottomBar.followUs}
              </span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    className={`text-primary-content text-opacity-70 ${social.hoverColor} transition-colors duration-200 p-2 rounded-full hover:bg-primary`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;