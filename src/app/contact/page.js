"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useLanguage();
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
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:mt-[-8rem] z-[1]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-3xl font-semibold md:text-5xl mt-6">
            {t('contact')}
          </h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-[#bdb4ff] mx-auto my-4 rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl"
          >
            {t('getInTouch')}
          </motion.p>
        </motion.div>

        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 rounded-lg text-center bg-green-100 text-green-800 border border-green-400"
          >
            {t('successMessage')}
          </motion.div>
        )}

        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 rounded-lg text-center bg-red-100 text-red-800 border border-red-400"
          >
            {t('errorMessage')}
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#0f172a] bg-opacity-50 rounded-xl p-6 sm:p-10 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {[
                { id: 'fullName', label: t('fullName'), type: 'text', required: true, placeholder: t('placeholderFullName') },
                { id: 'email', label: t('emailAddress'), type: 'email', required: true, placeholder: t('placeholderEmail') },
                { id: 'phone', label: t('phoneNumber'), type: 'tel', required: false, placeholder: t('placeholderPhone') }
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <label 
                    htmlFor={field.id} 
                    className="block text-sm font-semibold mb-2"
                  >
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    name={field.id}
                    id={field.id}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className="block w-full px-4 py-3.5 bg-[#0f172a] bg-opacity-70 border border-[#bdb4ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdb4ff] focus:border-transparent transition duration-300 placeholder-gray-400"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-2"
                >
                  {t('yourMessage')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  placeholder={t('placeholderMessage')}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 bg-[#0f172a] bg-opacity-70 border border-[#bdb4ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdb4ff] focus:border-transparent transition duration-300 resize-none placeholder-gray-400"
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`w-full px-6 py-4 rounded-lg font-semibold text-base transform shadow-lg 
                ${isSubmitting
                  ? "bg-gray-500 cursor-not-allowed opacity-50"
                  : showSuccess
                  ? "bg-green-600 text-white"
                  : "bg-[#3e276c] text-white hover:bg-[#bdb4ff] hover:text-[#0f172a] hover:shadow-xl"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('sending')}
                </span>
              ) : showSuccess ? (
                <span className="flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('messageSent')}
                </span>
              ) : (
                t('sendMessage')
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
