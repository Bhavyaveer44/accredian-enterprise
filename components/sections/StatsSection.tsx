import { stats } from "@/lib/mockData";

export default function StatsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 text-center shadow-sm backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-semibold text-blue-600">{stat.value}</p>
            <p className="mt-3 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
