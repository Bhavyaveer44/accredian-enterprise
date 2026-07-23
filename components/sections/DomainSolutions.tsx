import { Cpu, Lightbulb, TrendingUp } from "lucide-react";
import { domainSolutions } from "@/lib/mockData";

const icons = [Lightbulb, Cpu, TrendingUp];

export default function DomainSolutions() {
  return (
    <section id="domain-solutions" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Domain Expertise</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">
            Focused learning built for enterprise transformation
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Three strategic growth areas that help modern teams adopt new capabilities and move from insight to impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {domainSolutions.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
