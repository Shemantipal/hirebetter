// Add "use client" directive at the top
"use client";

import React, { useState } from 'react';

// Define types for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

// Define the list of FAQs with type
const faqs: FAQ[] = [
  { question: 'How does HireBetter rank applicants?', answer: 'HireBetter uses a combination of your GitHub profile and resume to create a comprehensive ranking. We analyze your GitHub contributions, project quality, and coding frequency, along with your resume details to provide an objective assessment.' },
  { question: 'Is my GitHub profile mandatory for applying through HireBetter?', answer: 'While a GitHub profile significantly enhances your ranking and provides a more accurate assessment, it is not mandatory. You can still apply using your resume and other relevant information but candidates with GitHub gets better ranking.' },
  { question: 'Can I update my profile or reapply to improve my ranking?', answer: 'Yes, you can update your profile anytime. As your GitHub activities increase and you enhance your resume, your ranking may improve. You can also reapply to positions, and our system will use your most up-to-date information.' },
  { question: 'Can I see how I compare to other applicants for a specific job?', answer: 'Yes, you can see your percentile ranking among other applicants for each job. This gives you an idea of your competitiveness without revealing other applicants personal information.' },
  { question: 'Can employers see my full GitHub profile and resume?', answer: 'Employers only see an anonymized summary of your skills and achievements until you choose to reveal your full profile. This helps prevent unconscious bias and ensures initial evaluations are based purely on merit.' },
  { question: 'How often is my ranking updated?', answer: 'Your ranking is updated in real-time as you make new GitHub contributions or update your resume. This ensures that your most recent achievements are always reflected in your applications.' },
];

function FrequentlyAskedQuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the accordion
  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-8">
      <h2 className="text-2xl font-mono mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-800 rounded-lg shadow-sm">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center py-4 px-6 text-left bg-slate-700 hover: focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="text-lg text-green-200 font-mono">{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="py-4 px-6 text-gray-700">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestionSection;
