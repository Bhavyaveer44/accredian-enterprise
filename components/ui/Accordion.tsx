"use client";

import { useState } from "react";
import { ChevronsDown, ChevronsUp } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-slate-900">{item.question}</span>
              <span className="text-blue-600">
                {isOpen ? <ChevronsUp size={20} /> : <ChevronsDown size={20} />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm leading-7 text-slate-600 border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
