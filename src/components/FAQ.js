"use client";
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of therapy do you offer?",
      answer: "I offer individual counseling, couples therapy, trauma-informed care, grief counseling, and specialized support for healthcare providers and immigrant families. Each approach is tailored to meet your unique needs and circumstances."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The duration of therapy varies greatly depending on individual needs, goals, and circumstances. Some clients see improvements in a few sessions, while others benefit from longer-term support. We'll regularly assess your progress and adjust our approach as needed."
    },
    {
      question: "Do you accept insurance?",
      answer: "I accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. I also offer sliding scale fees for those who need financial assistance. Please contact me to verify your specific insurance coverage."
    },
    {
      question: "What can I expect in my first session?",
      answer: "Your first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, concerns, and what you hope to achieve. This is also a great time for you to ask questions and see if we're a good fit for working together."
    },
    {
      question: "Is therapy confidential?",
      answer: "Yes, therapy is confidential. What we discuss in our sessions is protected by law and professional ethics. There are only a few rare exceptions when confidentiality may be broken, such as if there's imminent danger to yourself or others, which I would discuss with you."
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Yes, I offer secure telehealth sessions for clients who prefer online therapy or cannot attend in-person sessions. Online therapy can be just as effective as in-person therapy and offers greater flexibility and accessibility."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone looking to improve their mental health, work through challenges, or achieve personal growth. If you're feeling overwhelmed, stuck, or simply want to better understand yourself, therapy might be a good fit."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations. Cancellations made with less than 24 hours notice may be subject to a fee. I understand that emergencies happen, and we can discuss these situations on a case-by-case basis."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
          <p className="text-xl text-gray-300">
            Frequently asked questions about therapy and my services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:bg-gray-700"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Don't see your question answered here?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

// Alternative version with different styling
const FAQAlternative = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of therapy do you offer?",
      answer: "I offer individual counseling, couples therapy, trauma-informed care, grief counseling, and specialized support for healthcare providers and immigrant families. Each approach is tailored to meet your unique needs and circumstances."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The duration of therapy varies greatly depending on individual needs, goals, and circumstances. Some clients see improvements in a few sessions, while others benefit from longer-term support. We'll regularly assess your progress and adjust our approach as needed."
    },
    {
      question: "Do you accept insurance?",
      answer: "I accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. I also offer sliding scale fees for those who need financial assistance. Please contact me to verify your specific insurance coverage."
    },
    {
      question: "What can I expect in my first session?",
      answer: "Your first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, concerns, and what you hope to achieve. This is also a great time for you to ask questions and see if we're a good fit for working together."
    },
    {
      question: "Is therapy confidential?",
      answer: "Yes, therapy is confidential. What we discuss in our sessions is protected by law and professional ethics. There are only a few rare exceptions when confidentiality may be broken, such as if there's imminent danger to yourself or others, which I would discuss with you."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our therapy services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out and I'll be happy to help you find the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
export { FAQAlternative };