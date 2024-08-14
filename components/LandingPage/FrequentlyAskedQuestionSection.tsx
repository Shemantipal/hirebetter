"use client"
import { faqs } from '@/data/faq';
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { TypographyH1 } from '../ui/typography';

function FrequentlyAskedQuestionSection() {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <TypographyH1 className="mb-2 text-center font-schoolbell">Frequently Asked Questions</TypographyH1>
      <div className="space-y-4 w-full">
        <Accordion variant="splitted" className='w-full dark:text-black'>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={index} aria-label={faq.question}
                classNames={{
                  title: 'text-black',
                }}
                title={faq.question} className='bg-[#dffd6e]/90 rounded-md w-full dark:text-black text-black'>
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
