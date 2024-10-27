'use client';

import React, { useEffect } from 'react';
import { Accordion } from 'flowbite';
import type { AccordionOptions, AccordionItem } from 'flowbite';

const AccordionComponent: React.FC = () => {
    useEffect(() => {
        const accordionEl = document.querySelector('#accordion-example') as HTMLElement | null;

        if (!accordionEl) {
            console.error('Accordion container not found');
            return;
        }

        const accordionItems: AccordionItem[] = [
            {
                id: 'accordion-example-heading-1',
                triggerEl: document.querySelector('#accordion-example-heading-1')!,
                targetEl: document.querySelector('#accordion-example-body-1')!,
                active: true,
            },
            {
                id: 'accordion-example-heading-2',
                triggerEl: document.querySelector('#accordion-example-heading-2')!,
                targetEl: document.querySelector('#accordion-example-body-2')!,
                active: false,
            },
            {
                id: 'accordion-example-heading-3',
                triggerEl: document.querySelector('#accordion-example-heading-3')!,
                targetEl: document.querySelector('#accordion-example-body-3')!,
                active: false,
            }
        ];

        // Filter out items where triggerEl or targetEl is null
        const validAccordionItems = accordionItems.filter(
            (item) => item.triggerEl !== null && item.targetEl !== null
        ) as AccordionItem[];

        const options: AccordionOptions = {
            alwaysOpen: true,
            activeClasses: 'bg-green-100 dark:bg-gray-800 text-gray-900 dark:text-white',
            inactiveClasses: 'dark:text-gray-400',
            onOpen: (item) => {
                console.log('Accordion item opened:', item);
            },
            onClose: (item) => {
                console.log('Accordion item closed:', item);
            },
            onToggle: (item) => {
                console.log('Accordion item toggled:', item);
            },
        };

        if (validAccordionItems.length > 0) {
            const accordion = new Accordion(accordionEl, validAccordionItems, options);
            return () => accordion.destroy();
        }
    }, []);

    return (
        <div id="accordion-example" data-accordion="open" className='mb-10'>
            <h2 id="accordion-example-heading-1">
                <button
                    type="button"
                    className="flex items-center justify-between bg-white w-full p-5 font-medium  border border-b-0 border-gray-200 rounded-t-xl hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-example-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-example-body-1"
                >
                    <span className="flex items-center font-bold">1. Дотоод аудитын талаар ерөнхий мэдээлэл</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
                </button>
            </h2>
            <div id="accordion-example-body-1" className="hidden" aria-labelledby="accordion-example-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className=" dark:text-gray-400">Flowbite is an open-source library...</p>
                    
                </div>
            </div>

            <h2 id="accordion-example-heading-2">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium  border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-example-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-example-body-2"
                >
                    <span className="flex items-center">Is there a Figma file available?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
                </button>
            </h2>
            <div id="accordion-example-body-2" className="hidden" aria-labelledby="accordion-example-heading-2">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className=" dark:text-gray-400">Flowbite is first conceptualized...</p>
                </div>
            </div>

            <h2 id="accordion-example-heading-3">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium  border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-example-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-example-body-3"
                >
                    <span className="flex items-center">What are the differences between Flowbite and Tailwind UI?</span>
                </button>
            </h2>
            <div id="accordion-example-body-3" className="hidden" aria-labelledby="accordion-example-heading-3">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className=" dark:text-gray-400">The main difference is...</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionComponent;
