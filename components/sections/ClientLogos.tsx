import { clientLogos } from "@/lib/mockData";

export default function ClientLogos() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-center text-sm font-semibold text-slate-600 uppercase tracking-[0.3em] mb-6">Trusted by leading companies</h2>

        <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
          <div
            className="flex items-center space-x-8 py-5 px-2"
            style={{
              animation: "var(--animate-marquee)",
            }}
          >
            {[...clientLogos, ...clientLogos].map((name, idx) => (
              <div key={idx} className="flex items-center justify-center px-6 py-3">
                <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
