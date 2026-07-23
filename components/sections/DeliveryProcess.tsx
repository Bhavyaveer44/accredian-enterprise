import { Layers, Sparkles, Target } from "lucide-react";
import { deliveryProcessSteps } from "@/lib/mockData";

const icons = [Target, Layers, Sparkles];

export default function DeliveryProcess() {
  return (
    <section id="delivery-process" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">How It Works</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">
            A simple, phased approach for measurable capability growth
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We combine diagnostic clarity, tailored design, and flexible delivery to help teams move from planning to performance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {deliveryProcessSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.title} className="rounded-[2rem] border border-white/90 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
