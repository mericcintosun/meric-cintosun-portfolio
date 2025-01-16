"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setShowSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setShowSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mt-[-6rem]">
        <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Contact
          </h1>
          <div className="w-24 h-1 bg-[#bdb4ff] mx-auto my-4 rounded-full"></div>
          <p className="text-xl md:text-2xl">
            Fill out the form below to get in touch
          </p>
        </div>

        {status === "success" && (
          <div className="mb-6 p-4 rounded-lg text-center bg-green-100 text-green-800 border border-green-400">
            Your message has been sent successfully. I will get back to you as soon as possible.
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 rounded-lg text-center bg-red-100 text-red-800 border border-red-400">
            An error occurred. Please try again later.
          </div>
        )}

        <div className="bg-[#0f172a] bg-opacity-50 rounded-xl p-6 sm:p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="fullName" 
                  className="block text-sm font-semibold mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="Meric Cintosun"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 bg-[#0f172a] bg-opacity-70 border border-[#bdb4ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdb4ff] focus:border-transparent transition duration-300 placeholder-gray-400"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="mericcintosunn@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 bg-[#0f172a] bg-opacity-70 border border-[#bdb4ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdb4ff] focus:border-transparent transition duration-300 placeholder-gray-400"
                />
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+90 530 954 7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 bg-[#0f172a] bg-opacity-70 border border-[#bdb4ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdb4ff] focus:border-transparent transition duration-300 placeholder-gray-400"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 bg-[#0f172a] bg-opacity-70 border border-[#bdb4ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdb4ff] focus:border-transparent transition duration-300 resize-none placeholder-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-4 rounded-lg font-semibold text-base transform transition-all duration-300 shadow-lg 
                ${isSubmitting
                  ? "bg-gray-500 cursor-not-allowed opacity-50"
                  : showSuccess
                  ? "bg-green-600 text-white"
                  : "bg-[#3e276c] text-white hover:bg-[#bdb4ff] hover:text-[#0f172a] hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : showSuccess ? (
                <span className="flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Message Sent
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
