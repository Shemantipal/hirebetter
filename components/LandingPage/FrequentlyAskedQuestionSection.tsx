"use client";

import { faqs } from '@/data/faq';
import React, { useState } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

function FrequentlyAskedQuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the accordion
  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-mono mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4 w-full">
        <Accordion variant="splitted" className='w-full'>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={index} aria-label={faq.question} title={faq.question} className='bg-[#dffd6e]/90 rounded-md w-full'>
                {faq.answer}
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestionSection;
