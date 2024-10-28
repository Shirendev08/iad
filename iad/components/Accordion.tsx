// components/Accordion.js
'use client'
import React, { useState } from "react";

interface AccordionItemType {
  title: string;
  content: React.ReactNode; // Changed from string to React.ReactNode
}

const AccordionItem = ({ title, content }: AccordionItemType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'flex justify-between w-full p-4 text-left bg-green-100 hover:bg-green-200 focus:outline-none mb-5' : 'flex justify-between w-full p-4 text-left text-gray-800 bg-white hover:bg-green-200 focus:outline-none mb-5'}` }
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-5">
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemType[];
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className="bg-white mt-[-5] mb-5">
      {items.map((item, index: number) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
