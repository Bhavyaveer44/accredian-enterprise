import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/lib/mockData";

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">FAQs</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">
            Questions we hear most from enterprise leaders
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Get quick clarity on how our programs are scoped, delivered, and measured.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
