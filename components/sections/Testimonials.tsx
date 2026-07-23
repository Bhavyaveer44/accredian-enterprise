import { Quote } from "lucide-react";
import { testimonials } from "@/lib/mockData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Testimonials</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">
            Leaders share the impact of business-ready learning
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 shadow-sm">
                <Quote size={20} />
              </div>
              <p className="mt-6 text-base leading-8 text-slate-600">“{item.quote}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}, {item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
